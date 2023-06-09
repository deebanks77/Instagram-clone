/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./lib/firebase";

const users = [
  {
    userId: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
    username: "karl",
    fullName: "Karl Hadwen",
    emailAddress: "karlhadwen@gmail.com",
    following: ["2"],
    followers: ["2", "3", "4"],
    dateCreated: Date.now(),
  },
  {
    userId: "2",
    username: "raphael",
    fullName: "Raffaello Sanzio da Urbino",
    emailAddress: "raphael@sanzio.com",
    following: [],
    followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
    dateCreated: Date.now(),
  },
  {
    userId: "3",
    username: "dali",
    fullName: "Salvador Dalí",
    emailAddress: "salvador@dali.com",
    following: [],
    followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
    dateCreated: Date.now(),
  },
  {
    userId: "4",
    username: "orwell",
    fullName: "George Orwell",
    emailAddress: "george@orwell.com",
    following: [],
    followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
    dateCreated: Date.now(),
  },
];

export function seedDatabase() {
  let postUsers = async () => {
    for (let i = 0; i < users.length; i++) {
      let response = await addDoc(collection(db, "users"), { ...users[i] });
      console.log(response);
    }
  };

  let postPhotos = async () => {
    for (let i = 0; i < users.length; i++) {
      let response = await addDoc(collection(db, "photos"), {
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
      console.log(response);
    }
  };

  //   postUsers();
  //   postPhotos();
}

// seedDatabase();
