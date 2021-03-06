import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = props => {
  return <Query query={CURRENT_USER_QUERY}>
    {({data, loading})=>{
      if(loading)return<p>loading...</p>
      if(!data.me) {
        return (
          <Signin />
        )
      }
      return props.children;
    }}
  </Query>
}

export default PleaseSignIn;