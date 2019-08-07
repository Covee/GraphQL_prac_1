# GraphQL_prac_1

## Steps
1. ```yarn init```
2. ```yarn add graphql-yoga```
3. ```yarn global add nodemon```
4. ```yarn add babel-node --dev``` 더 나은 코드 작성을 위한 babel-node 설치. 이 코드 안되면 5번 실행.
5. ```yarn global add babel-cli``` or ```yarn global add babel-cli --ignore-engines``` 
6. ```yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev``` 추가 설치할 것들
7. ```yarn start``` 서버 실행



## Description
- graphql-yoga는 create-react-app처럼 GraphQL 프로젝트를 빠르게 시작할 수 있게 도와주는 것 (easy-setup)
- graphql을 사용함으로써 over-fetching(사용할 데이터보다 더 많은 데이터를 DB에 요청하는 것)을 해결할 수 있다.
- under-fetching(REST에서 하나의 동작 실행을 완성하려고 많은 데이터 소스를 요청하는 경우) 또한 해결할 수 있다.
- GraphQL에는 URL이 존재하지 않는다. 체계도 없다. 하나의 end-point만 있을 뿐.
- GraphQL backend에 요청한 것에 따른 값들만 JS Object로 정확히 보내준다.
- view, url 그런 것 없이 오로지 Query와 Resolver만 있다. 요청은 Query, 돌려줄 값은 Resolver(여기에는 어떤 코드라도 내가 원하는 대로 짜면 된다)
- 


## Reference
[Tutorial](https://www.youtube.com/watch?v=3PZGW5Iwtv4&list=PL7jH19IHhOLOpU_yAYzCO4iQNvdou1AnK)
