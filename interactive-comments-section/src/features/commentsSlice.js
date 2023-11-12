import { createSlice, current } from '@reduxjs/toolkit';

const data = {
  currentUser: {
    image: {
      png: './images/avatars/image-juliusomo.png',
      webp: './images/avatars/image-juliusomo.webp',
    },
    username: 'juliusomo',
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: '1 month ago',
      score: 12,
      user: {
        image: {
          png: './images/avatars/image-amyrobson.png',
          webp: './images/avatars/image-amyrobson.webp',
        },
        username: 'amyrobson',
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: '2 weeks ago',
      score: 5,
      user: {
        image: {
          png: './images/avatars/image-maxblagun.png',
          webp: './images/avatars/image-maxblagun.webp',
        },
        username: 'maxblagun',
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: '1 week ago',
          score: 4,
          replyingTo: 'maxblagun',
          user: {
            image: {
              png: './images/avatars/image-ramsesmiron.png',
              webp: './images/avatars/image-ramsesmiron.webp',
            },
            username: 'ramsesmiron',
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: '2 days ago',
          score: 2,
          replyingTo: 'ramsesmiron',
          user: {
            image: {
              png: './images/avatars/image-juliusomo.png',
              webp: './images/avatars/image-juliusomo.webp',
            },
            username: 'juliusomo',
          },
        },
      ],
    },
  ],
};

export const commentsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: data,
  },
  reducers: {
    save: (state, action) => {
      state = action.payload;
    },
    addPost: (state, action) => {
      let posts = state.value.comments;
      if (action.payload[1]?.isReply === true) {
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].id == action.payload[1]?.postId) {
            posts[i].replies.push(action.payload[0]);
          }
        }
      } else {
        state.value.comments.push(action.payload);
      }
    },
    vote: (state, action) => {
      const postId = action.payload.id;
      let data = state.value.comments;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == postId) {
          if (action.payload.addition) {
            data[i].score += 1;
          } else {
            if (data[i].score > 0) {
              data[i].score -= 1;
            }
          }
        } else {
          if (data[i].replies != null && data[i].replies.length > 0) {
            for (let j = 0; j < data[i].replies.length; j++) {
              if (data[i].replies[j].id == postId) {
                if (action.payload.addition) {
                  data[i].replies[j].score += 1;
                } else {
                  if (data[i].replies[j].score > 0) {
                    data[i].replies[j].score -= 1;
                  }
                }
              }
            }
          }
        }
      }
    },
  },
});

export const { save, addPost, vote } = commentsSlice.actions;

export default commentsSlice.reducer;
