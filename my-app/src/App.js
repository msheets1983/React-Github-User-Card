import React from 'react';
import Card from './components/card'
import FollowerCard from './components/followerCard'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: '',
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/msheets1983')
      .then(res1 => {
        console.log(res1.data)
        axios
        .get(res1.data.followers_url)
        .then(res2 => {
          console.log(res2.data)
          this.setState({
            user: res1.data,
            followers: res2.data
          })
        })
      })
      // axios
      // .get('https://api.github.com/users/msheets1983/followers')
      // .then(res => {
      //   res.data.forEach( person =>{
      //    axios.get(person.url) 
      //     .then(data => {
      //       this.setState({ users: data.data.name})
      //       this.setState({ locationUsers: data.data.location})
      //       this.setState({ avatarUsers: data.data.avatar_url})
      //       this.setState({ reposUsers: data.data.public_repos})
      //       this.setState({ bioUsers: data.data.bio})
      //       console.log(data)
      //     })
      //   })
      // })
      .catch(err => console.log(err));
  };

  render(){
    return(
      <div className = 'mainDiv'>
        <h1>GitHub User Cards</h1>
        <Card 
          userImg = {this.state.user.avatar_url}
          name = {this.state.user.name}
          username = {this.state.user.login}
          profile = {this.state.user.url}
          followers = {this.state.user.followers}
          following = {this.state.user.following}
          bio = {this.state.user.bio}
          />
          <h1>My Followers</h1>
        {
        this.state.followers.map(follower=>{
          console.log(follower)
          return <FollowerCard 
          userImg = {follower.avatar_url}
          username = {follower.login}
          profile = {follower.url}
          
          />
        })
        }
      </div>
    )
  }
}

export default App;