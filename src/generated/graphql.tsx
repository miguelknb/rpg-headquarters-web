import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  msg: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlayer: Player;
  updatePlayer?: Maybe<Player>;
  deletePlayer: Scalars['Boolean'];
  changeMaxHealth?: Maybe<Player>;
  heal?: Maybe<Player>;
  damage?: Maybe<Player>;
  register: UserResponse;
  login: UserResponse;
};


export type MutationCreatePlayerArgs = {
  maxHealth: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationUpdatePlayerArgs = {
  maxHealth?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeletePlayerArgs = {
  id: Scalars['Float'];
};


export type MutationChangeMaxHealthArgs = {
  newHealth: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationHealArgs = {
  healHealth: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationDamageArgs = {
  dmgHealth: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  name: Scalars['String'];
  maxHealth: Scalars['Int'];
  currentHealth: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  players: Array<Player>;
  player?: Maybe<Player>;
  me?: Maybe<User>;
};


export type QueryPlayerArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  maxHealth: Scalars['Int'];
  currentHealth: Scalars['Int'];
  partyId: Scalars['Int'];
  imgUrl_sane_normal: Scalars['String'];
  imgUrl_sane_hurt: Scalars['String'];
  imgUrl_sane_dying: Scalars['String'];
  imgUrl_insane_normal: Scalars['String'];
  imgUrl_insane_hurt: Scalars['String'];
  imgUrl_insane_dying: Scalars['String'];
  imgUrl_dead: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'msg'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'msg'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'maxHealth' | 'currentHealth' | 'imgUrl_sane_normal' | 'imgUrl_sane_hurt' | 'imgUrl_sane_dying'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    errors {
      field
      msg
    }
    user {
      id
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    errors {
      field
      msg
    }
    user {
      id
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    maxHealth
    currentHealth
    imgUrl_sane_normal
    imgUrl_sane_hurt
    imgUrl_sane_dying
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};