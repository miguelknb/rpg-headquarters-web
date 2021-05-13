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
  register: UserResponse;
  login: UserResponse;
  changeMaxHealth?: Maybe<User>;
  changeInsanityStatus?: Maybe<User>;
  heal?: Maybe<User>;
  damage?: Maybe<User>;
  healSanity?: Maybe<User>;
  damageSanity?: Maybe<User>;
  changeHealth?: Maybe<User>;
  updateUser?: Maybe<User>;
  changeSanity?: Maybe<User>;
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationChangeMaxHealthArgs = {
  newHealth: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationChangeInsanityStatusArgs = {
  sanity: Scalars['Boolean'];
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


export type MutationHealSanityArgs = {
  healSanity: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationDamageSanityArgs = {
  dmgSanity: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationChangeHealthArgs = {
  newHealth: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationUpdateUserArgs = {
  imgUrl_dead: Scalars['String'];
  imgUrl_insane_dying: Scalars['String'];
  imgUrl_insane_hurt: Scalars['String'];
  imgUrl_insane_normal: Scalars['String'];
  imgUrl_sane_dying: Scalars['String'];
  imgUrl_sane_hurt: Scalars['String'];
  imgUrl_sane_normal: Scalars['String'];
  maxSanity: Scalars['Float'];
  maxHealth: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationChangeSanityArgs = {
  newSanity: Scalars['Float'];
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  StatusChange: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  maxHealth: Scalars['Int'];
  currentHealth: Scalars['Int'];
  maxSanity: Scalars['Int'];
  currentSanity: Scalars['Int'];
  partyId: Scalars['Int'];
  isInsane: Scalars['Boolean'];
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

export type ChangeHealthMutationVariables = Exact<{
  id: Scalars['Float'];
  newHealth: Scalars['Float'];
}>;


export type ChangeHealthMutation = (
  { __typename?: 'Mutation' }
  & { changeHealth?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxHealth' | 'currentHealth'>
  )> }
);

export type ChangeSanityMutationVariables = Exact<{
  id: Scalars['Float'];
  newSanity: Scalars['Float'];
}>;


export type ChangeSanityMutation = (
  { __typename?: 'Mutation' }
  & { changeSanity?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxSanity' | 'currentSanity'>
  )> }
);

export type ChangeInsanityStatusMutationVariables = Exact<{
  id: Scalars['Float'];
  sanity: Scalars['Boolean'];
}>;


export type ChangeInsanityStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeInsanityStatus?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'isInsane'>
  )> }
);

export type DamageMutationVariables = Exact<{
  id: Scalars['Float'];
  dmgHealth: Scalars['Float'];
}>;


export type DamageMutation = (
  { __typename?: 'Mutation' }
  & { damage?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxHealth' | 'currentHealth'>
  )> }
);

export type DamageSanityMutationVariables = Exact<{
  id: Scalars['Float'];
  dmgSanity: Scalars['Float'];
}>;


export type DamageSanityMutation = (
  { __typename?: 'Mutation' }
  & { damageSanity?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxSanity' | 'currentSanity'>
  )> }
);

export type HealMutationVariables = Exact<{
  id: Scalars['Float'];
  healHealth: Scalars['Float'];
}>;


export type HealMutation = (
  { __typename?: 'Mutation' }
  & { heal?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxHealth' | 'currentHealth'>
  )> }
);

export type HealSanityMutationVariables = Exact<{
  id: Scalars['Float'];
  healSanity: Scalars['Float'];
}>;


export type HealSanityMutation = (
  { __typename?: 'Mutation' }
  & { healSanity?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxSanity' | 'currentSanity'>
  )> }
);

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

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Float'];
  maxHealth: Scalars['Float'];
  maxSanity: Scalars['Float'];
  imgUrl_sane_normal: Scalars['String'];
  imgUrl_sane_hurt: Scalars['String'];
  imgUrl_sane_dying: Scalars['String'];
  imgUrl_insane_normal: Scalars['String'];
  imgUrl_insane_hurt: Scalars['String'];
  imgUrl_insane_dying: Scalars['String'];
  imgUrl_dead: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'maxHealth' | 'currentHealth' | 'maxSanity' | 'imgUrl_sane_normal' | 'imgUrl_sane_hurt' | 'imgUrl_sane_dying' | 'imgUrl_insane_normal' | 'imgUrl_insane_hurt' | 'imgUrl_insane_dying' | 'imgUrl_dead'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'maxHealth' | 'currentHealth' | 'maxSanity' | 'currentSanity' | 'isInsane' | 'imgUrl_sane_normal' | 'imgUrl_sane_hurt' | 'imgUrl_sane_dying' | 'imgUrl_insane_normal' | 'imgUrl_insane_hurt' | 'imgUrl_insane_dying' | 'imgUrl_dead'>
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'maxHealth' | 'currentHealth' | 'maxSanity' | 'currentSanity' | 'isInsane' | 'imgUrl_sane_normal' | 'imgUrl_sane_hurt' | 'imgUrl_sane_dying' | 'imgUrl_insane_normal' | 'imgUrl_insane_hurt' | 'imgUrl_insane_dying' | 'imgUrl_dead'>
  )> }
);

export type ChangeStatusSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChangeStatusSubscription = (
  { __typename?: 'Subscription' }
  & { StatusChange: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'maxHealth' | 'currentHealth' | 'maxSanity' | 'currentSanity' | 'isInsane'>
  ) }
);


export const ChangeHealthDocument = gql`
    mutation ChangeHealth($id: Float!, $newHealth: Float!) {
  changeHealth(id: $id, newHealth: $newHealth) {
    id
    maxHealth
    currentHealth
  }
}
    `;

export function useChangeHealthMutation() {
  return Urql.useMutation<ChangeHealthMutation, ChangeHealthMutationVariables>(ChangeHealthDocument);
};
export const ChangeSanityDocument = gql`
    mutation ChangeSanity($id: Float!, $newSanity: Float!) {
  changeSanity(id: $id, newSanity: $newSanity) {
    id
    maxSanity
    currentSanity
  }
}
    `;

export function useChangeSanityMutation() {
  return Urql.useMutation<ChangeSanityMutation, ChangeSanityMutationVariables>(ChangeSanityDocument);
};
export const ChangeInsanityStatusDocument = gql`
    mutation ChangeInsanityStatus($id: Float!, $sanity: Boolean!) {
  changeInsanityStatus(id: $id, sanity: $sanity) {
    id
    isInsane
  }
}
    `;

export function useChangeInsanityStatusMutation() {
  return Urql.useMutation<ChangeInsanityStatusMutation, ChangeInsanityStatusMutationVariables>(ChangeInsanityStatusDocument);
};
export const DamageDocument = gql`
    mutation Damage($id: Float!, $dmgHealth: Float!) {
  damage(id: $id, dmgHealth: $dmgHealth) {
    id
    maxHealth
    currentHealth
  }
}
    `;

export function useDamageMutation() {
  return Urql.useMutation<DamageMutation, DamageMutationVariables>(DamageDocument);
};
export const DamageSanityDocument = gql`
    mutation DamageSanity($id: Float!, $dmgSanity: Float!) {
  damageSanity(id: $id, dmgSanity: $dmgSanity) {
    id
    maxSanity
    currentSanity
  }
}
    `;

export function useDamageSanityMutation() {
  return Urql.useMutation<DamageSanityMutation, DamageSanityMutationVariables>(DamageSanityDocument);
};
export const HealDocument = gql`
    mutation Heal($id: Float!, $healHealth: Float!) {
  heal(id: $id, healHealth: $healHealth) {
    id
    maxHealth
    currentHealth
  }
}
    `;

export function useHealMutation() {
  return Urql.useMutation<HealMutation, HealMutationVariables>(HealDocument);
};
export const HealSanityDocument = gql`
    mutation HealSanity($id: Float!, $healSanity: Float!) {
  healSanity(id: $id, healSanity: $healSanity) {
    id
    maxSanity
    currentSanity
  }
}
    `;

export function useHealSanityMutation() {
  return Urql.useMutation<HealSanityMutation, HealSanityMutationVariables>(HealSanityDocument);
};
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Float!, $maxHealth: Float!, $maxSanity: Float!, $imgUrl_sane_normal: String!, $imgUrl_sane_hurt: String!, $imgUrl_sane_dying: String!, $imgUrl_insane_normal: String!, $imgUrl_insane_hurt: String!, $imgUrl_insane_dying: String!, $imgUrl_dead: String!) {
  updateUser(
    id: $id
    maxHealth: $maxHealth
    maxSanity: $maxSanity
    imgUrl_sane_normal: $imgUrl_sane_normal
    imgUrl_sane_hurt: $imgUrl_sane_hurt
    imgUrl_sane_dying: $imgUrl_sane_dying
    imgUrl_insane_normal: $imgUrl_insane_normal
    imgUrl_insane_hurt: $imgUrl_insane_hurt
    imgUrl_insane_dying: $imgUrl_insane_dying
    imgUrl_dead: $imgUrl_dead
  ) {
    id
    maxHealth
    currentHealth
    maxHealth
    maxSanity
    imgUrl_sane_normal
    imgUrl_sane_hurt
    imgUrl_sane_dying
    imgUrl_insane_normal
    imgUrl_insane_hurt
    imgUrl_insane_dying
    imgUrl_dead
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    maxHealth
    currentHealth
    maxSanity
    currentSanity
    isInsane
    imgUrl_sane_normal
    imgUrl_sane_hurt
    imgUrl_sane_dying
    imgUrl_insane_normal
    imgUrl_insane_hurt
    imgUrl_insane_dying
    imgUrl_dead
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const UserDocument = gql`
    query User($id: Float!) {
  user(id: $id) {
    id
    username
    maxHealth
    currentHealth
    maxSanity
    currentSanity
    isInsane
    imgUrl_sane_normal
    imgUrl_sane_hurt
    imgUrl_sane_dying
    imgUrl_insane_normal
    imgUrl_insane_hurt
    imgUrl_insane_dying
    imgUrl_dead
  }
}
    `;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const ChangeStatusDocument = gql`
    subscription ChangeStatus {
  StatusChange {
    id
    username
    maxHealth
    currentHealth
    maxSanity
    currentSanity
    isInsane
  }
}
    `;

export function useChangeStatusSubscription<TData = ChangeStatusSubscription>(options: Omit<Urql.UseSubscriptionArgs<ChangeStatusSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<ChangeStatusSubscription, TData>) {
  return Urql.useSubscription<ChangeStatusSubscription, TData, ChangeStatusSubscriptionVariables>({ query: ChangeStatusDocument, ...options }, handler);
};