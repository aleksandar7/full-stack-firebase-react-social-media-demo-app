let db = {
    users: [
        {
          userId: 'dh23ggj5h32g543j5gf43',
          email: 'user@email.com',
          handle: 'user',
          createdAt: '2019-03-15T10:59:52.798Z',
          imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
          bio: 'Hello, my name is user, nice to meet you',
          website: 'https://user.com',
          location: 'London, UK'
        }
      ],
    screams: [
        {
        body: 'cool Scream',
        userHandle: 'user',
        createAt: '2019-03-21T11:45:02.0192',
        likeCount: 5,
        commentCount: 2
        }
    ],
    comments: [
      {
      screamId: 'viZvOuoIhLflw9rDakGH',
      userHandle: 'user',
      createAt: '2019-03-21T11:45:02.0192',
      body: "cool comment"
      }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: 'kdjsfgdksuufhgkdsufky',
      type: 'like | comment',
      createdAt: '2019-03-15T10:59:52.798Z'
    }
  ]
};

const userDetails = {
  credentials: [
      {
        userId: 'dh23ggj5h32g543j5gf43',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-03-15T10:59:52.798Z',
        imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Lonodn, UK'
      }
    ],
  likes: [
      {
      userHandle: 'user',
      screamID: 'dh23ggj5h32g543j5gf43'
      },
      {
      userHandle: 'user',
      screamID: 'dh23ggj5h32g543j5gf43'
      }
  ],
};


