FROM arm32v7/node

WORKDIR /app
RUN npm install -g serve
COPY ./build /app/build

EXPOSE 5000

CMD serve -s build

