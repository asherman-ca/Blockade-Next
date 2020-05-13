import Router from 'next/router';
import Link from 'next/link';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION =  gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(
      name: $name
      email: $email
      password: $password
    ) {
      id
      email
      name
    }
  }
`;

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(signup, { loading, error }) => (
          <Form method="post" onSubmit={async e => {
            e.preventDefault();
            await signup();
            this.setState({
              name: '',
              email: '',
              password: '',
            })
            Router.push({
              pathname: '/',
            })
          }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign up for an account</h2>
              <Error error={error} />
                <label htmlFor="email">
                  <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>  
                <label htmlFor="name">
                  <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submut">Sign Up</button>
                <Link href="/signin">
                  <a>
                    <p>Already have an account?</p>
                  </a>
                </Link>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}