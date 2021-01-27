import * as ActionType from "./constant";
import { HomeUserAssets } from "../../../Modules/Assets";

export const actListMovieApi = () => {
  return (dispatch) => {
    dispatch(actFetchHomeDataRequest());
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(tempData)
      }, 500);
    })
      .then((result) => {
        dispatch(actFetchHomeDataSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actFetchHomeDataFailed(err));
      });
  };
};

const actFetchHomeDataRequest = () => {
  return {
    type: ActionType.FETCH_HOME_DATA_REQUEST,
  };
};

const actFetchHomeDataSuccess = (data) => {
  return {
    type: ActionType.FETCH_HOME_DATA_SUCCESS,
    payload: data,
  };
};

const actFetchHomeDataFailed = (err) => {
  return {
    type: ActionType.FETCH_HOME_DATA_FAILED,
    payload: err,
  };
};


const tempData = {
  courseList: [
    {
      auth: 'Admin',
      date: 'August 16, 2020',
      content: '10 Building Mobile Apps With Ionic And React',
      classIcon: 'sticky',
    },
    {
      auth: 'Admin',
      date: 'August 01, 2020',
      content: 'The hardest leadership advice to follow',
      classIcon: 'link',
    },
    {
      auth: 'Admin',
      date: 'August 08, 2020',
      content: 'How to share your company vision as a leader',
      classIcon: 'quote',
    }
  ],

  news: [
    {
      id: 1,
      auth: 'Dong',
      date: 'August 15, 2020',
      title: 'Making Peace With The Feast Or Famine Of Freelancing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      thumbnail: HomeUserAssets.news.blog_1,
    },
    {
      id: 2,
      auth: 'Dong 2',
      date: 'August 18, 2020',
      title: 'I Used The Web For A Day On A 50 MB Budget',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      thumbnail: HomeUserAssets.news.blog_1,
    },
    {
      id: 3,
      auth: 'Dong 3',
      date: 'August 16, 2020',
      title: 'Here are the 5 most telling signs of micromanagement',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      thumbnail: HomeUserAssets.news.blog_1,
    },
  ],
  gallery: [
    {
      id: 1,
      thumbnail: HomeUserAssets.gallarys.gallary_1,
      title: 'Industry Expertise',
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
        tempor ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.`,
    },
    {
      id: 2,
      thumbnail: HomeUserAssets.gallarys.gallary_2,
      title: 'Expertise & Leadership',
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
        tempor ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.`,
    },
    {
      id: 3,
      thumbnail: HomeUserAssets.gallarys.gallary_3,
      title: 'Dedicated IT Solution',
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
        tempor ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.`,
    },
  ]
}