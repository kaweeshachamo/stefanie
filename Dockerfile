FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Kaweeshachamodk/stefanie /root/stefanie
WORKDIR /root/stefanie/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
