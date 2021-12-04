FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi
WORKDIR /root/Queen-Jesi/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
