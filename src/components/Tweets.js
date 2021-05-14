import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getTweets,
} from '../redux/tweets/tweetsSlice';
import { useSelector } from 'react-redux';

function getProcessedTweet(content) {
  return `${content}`.split('\n').map(line => (
    <span>
      {line}<br/>
    </span>
  ));
}

function Tweets() {
  const tweets = useSelector(state => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  return (
    <>
      {tweets.list.map(tweet => (
        <div className="card bg-white text-black mb-2">
          <div className="card-body">
            <div className="mb-2">
              <span className="font-weight-bold mr-1">
                {tweet.displayName}
              </span>
              <span className="text-black-50">
                @{tweet.userName} &middot; {tweet.timeElapsed}
              </span>
            </div>
            <div>
              {getProcessedTweet(tweet.content)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Tweets;
