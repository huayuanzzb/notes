#!/bin/bash
# 以root用户执行当前脚本, 否则退出.
if [ $UID -ne 0 ]; then
  echo "Please run script as root." 
  exit 1
fi
echo "node_name: ${OPENVPN_CA_CRT}"
# sudo swapoff -a
# sudo systemctl stop ufw
hostnamectl set-hostname ${NODE_NAME}
# wget https://github.com/flannel-io/flannel/releases/download/v0.18.1/flannel-v0.18.1-linux-amd64.tar.gz
# tar xf flannel-v0.18.1-linux-amd64.tar.gz
# cp flanneld /usr/local/bin/flanneld
# cat > /etc/systemd/system/flanneld.service <<EOF
#   [Unit]
#   Description=Flanneld service
#   Documentation=https://github.com/coreos/flannel
#   After=network.target
#   Before=docker.service
#   [Service]
#   User=root
#   ExecStart=/usr/local/bin/flanneld -etcd-endpoints=http://${FRPS_HOST}:2379
#   Restart=on-failure
#   Type=notify
#   LimitNOFILE=65536
#   [Install]
#   WantedBy=multi-user.target
# EOF
wget https://github.com/fatedier/frp/releases/download/v0.42.0/frp_0.42.0_linux_amd64.tar.gz
tar xf frp_0.42.0_linux_amd64.tar.gz
cp frp_0.42.0_linux_amd64/frpc /usr/bin/
cp frp_0.42.0_linux_amd64/systemd/frpc.service /etc/systemd/system/
mkdir /etc/frp
cat > frpc.ini <<EOF
  [common]
  server_addr = ${FRPS_HOST}
  server_port = 7000
  [ssh-${NODE_NAME}]
  type = tcp
  local_ip = 127.0.0.1
  local_port = 22
  remote_port = ${FRPS_REMOTE_PORT}
EOF
mv frpc.ini /etc/frp/
systemctl daemon-reload
systemctl start frpc.service
apt install openvpn
echo ${OPENVPN_CA_CRT} > /etc/openvpn/client/ca.crt
echo ${OPENVPN_TA_KEY} > /etc/openvpn/client/ta.key
cat > /etc/openvpn/client/psw <<EOF
${NODE_NAME}
${OPENVPN_PASSWORD}
EOF
cat > /etc/openvpn/client/client.conf <<EOF
client
dev tun
proto tcp
remote ${FRPS_HOST} 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca /etc/openvpn/client/ca.crt
remote-cert-tls server
tls-auth /etc/openvpn/client/ta.key 1
cipher AES-256-CBC
verb 3
auth-user-pass
EOF
chmod 600 /etc/openvpn/client/*
sed -i 's#ExecStart.*#ExecStart=/usr/sbin/openvpn --daemon ovpn-%i --status /run/openvpn/%i.status 10 --cd /etc/openvpn --config /etc/openvpn/%i/%i.conf --writepid /run/openvpn/%i.pid --auth-user-pass /etc/openvpn/%i/psw#g' /lib/systemd/system/openvpn@.service
systemctl daemon-reload
# systemctl start openvpn@client.service

        