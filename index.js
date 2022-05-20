import firebase from "./module/firebase";

firebase.getData();
firebase.saveData();

exports.handler = async (event) => {
  // event의 queryStringFormat 참조
  says = event["userRequest"]["utterance"];
  user_key = event["userRequest"]["user"]["id"];

  // 각 유저의 발언에 따른 says와 user_key를 분류할 수 있는 로직 필요
  // 학생식당, 푸름관, 오름1동, 오름3동, 교직원, 오늘, 월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일, 처음으로, 식단 정보, 식단 이용 가능 시간, 학생식당 시간, 기숙사 기나, 교직원 시간

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
