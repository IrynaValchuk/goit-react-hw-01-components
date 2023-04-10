import user from 'data/user.json';
import data from 'data/data.json'
import friends from 'data/friends.json'
import { Profile, Statistics, FriendList } from 'components';
import css from 'components/App/App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
