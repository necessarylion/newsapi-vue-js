<template>
  <div class="card">
    <div class="source-date-container">
      <div class="source-name"></div>
      <div class="publish-date"></div>
    </div>
    <div class="news-title"></div>
    <div class="news-author"></div>
    <div class="card-footer"></div>
  </div>
</template>

<style scoped>
.card {
  background: #f6f6f6;
  border-radius: 6px;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.source-date-container {
  margin-bottom: 10px;
  color: #504f4f;
  display: flex;
}

.source-name {
  padding-right: 10px;
  margin-right: 10px;
  font-size: 11px;
  font-weight: 600;
  width: 87px;
  background: #ededed;
  border-radius: 5px;
  height: 17px;
  background: linear-gradient(45deg, #dfdfdf, #ffffff);
  background-size: 300% 300%;
  animation: gradient 3s ease infinite;
}

.publish-date {
  padding-right: 10px;
  margin-right: 10px;
  font-size: 11px;
  font-weight: 600;
  width: 87px;
  background: #ededed;
  border-radius: 5px;
  height: 17px;
  background: linear-gradient(90deg, #dfdfdf, #ffffff);
  background-size: 300% 300%;
  animation: gradient 3s ease infinite;
}

.news-title {
  padding-right: 10px;
  margin-right: 10px;
  font-size: 11px;
  font-weight: 600;
  width: 100%;
  background: #ededed;
  border-radius: 5px;
  flex: 1;
  margin-bottom: 10px;
  background: linear-gradient(271deg, #dfdfdf, #ffffff);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
}

.news-author {
  padding-right: 10px;
  margin-right: 10px;
  font-size: 11px;
  font-weight: 600;
  width: 87px;
  background: #ededed;
  border-radius: 5px;
  height: 17px;
  background: linear-gradient(271deg, #dfdfdf, #ffffff);
  background-size: 300% 300%;
  animation: gradient 3s ease infinite;
}

.card-footer {
  border-top: 0.5px solid #c9c9c9;
  margin-top: 10px;
  padding: 10px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
}
</style>
