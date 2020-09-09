import axios from 'axios';
import {api_url} from '../constant';

export function callApiRegister(body) {
  return axios({
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: body,
    url: `${api_url}/user/register`,
  });
}

// export function callApiLogin(username, password) {
//   return axios({
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     data: {
//       email: username,
//       password: password,
//     },
//     url: `${api_url}/user/login`,
//   })
//     .then((res) => {
//       if (res.data.message === 'OK') {
//         return {status: 200};
//       } else {
//         return {status: 404};
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
export function callApiLogin(body) {
  return axios({
    method: 'POST',
    data: body,
    url: `${api_url}/user/login`,
  });
}
export function callApiGetTopSell(body) {
  return axios({
    method: 'POST',
    data: body,
    url: `${api_url}/course/top-sell`,
  });
}
export function callApiGetTopRate(body) {
  return axios({
    method: 'POST',
    data: body,
    url: `${api_url}/course/top-rate`,
  });
}
export function callApiGetTopNew(body) {
  return axios({
    method: 'POST',
    data: body,
    url: `${api_url}/course/top-new`,
  });
}
export function callApiGetDetailWithLesson(id, token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/course/detail-with-lesson/${id}`,
  });
}
export function callApiGetInstructorDetail(id) {
  return axios({
    method: 'GET',
    url: `${api_url}/instructor/detail/${id}`,
  });
}
export function callApiPostGetFreeCourse(body, token) {
  return axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: body,
    url: `${api_url}/payment/get-free-courses`,
  });
}
export function callApiPostUpdateLessonStatus(body, token) {
  return axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: body,
    url: `${api_url}/lesson/update-status`,
  });
}
export function callApiGetProcessCourses(token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/get-process-courses`,
  });
}
export function callApiGetFavoriteCourses(token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/get-favorite-courses`,
  });
}
export function callApiGetAllCategories() {
  return axios({
    method: 'GET',
    url: `${api_url}/category/all`,
  });
}
export function callApiGetAllAuthors() {
  return axios({
    method: 'GET',
    url: `${api_url}/instructor`,
  });
}
export function callApiSearch(body) {
  return axios({
    method: 'POST',
    data: body,
    url: `${api_url}/course/search`,
  });
}
export function callApiUpdateFavoriteCategories(body, token) {
  return axios({
    method: 'PUT',
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/update-favorite-categories`,
  });
}
export function callApiGetRecommendCourses(id) {
  return axios({
    method: 'GET',
    url: `${api_url}/user/recommend-course/${id}/100/0`,
  });
}
export function callApiGetLikeStatus(id, token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/get-course-like-status/${id}`,
  });
}
export function callApiPostLikeCourse(body, token) {
  return axios({
    method: 'POST',
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/like-course`,
  });
}
export function callApiReportCourse(body, token) {
  return axios({
    method: 'POST',
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/course/report-course`,
  });
}
export function callApiGetRatingCourse(id, token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/course/get-rating/${id}`,
  });
}
export function callApiRatingCourse(body, token) {
  return axios({
    method: 'POST',
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/course/rating-course`,
  });
}
export function callApiGetCourseInfo(id) {
  return axios({
    method: 'GET',
    url: `${api_url}/course/get-course-info?id=${id}`,
  });
}
export function callApiGetVideoUrl(courseId, lessonId, token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/lesson/video/${courseId}/${lessonId}`,
  });
}
export function callApiUploadAvatar(body, token) {
  return axios({
    method: 'POST',
    data: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/upload-avatar`,
  });
}
export function callApiUpdateInfo(body, token) {
  return axios({
    method: 'PUT',
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/update-profile`,
  });
}
export function callApiGetUserInfo(token) {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: `${api_url}/user/me`,
  });
}
