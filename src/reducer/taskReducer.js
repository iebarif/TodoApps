// export default function taskReducer(tasks, action) {
// new add
// if (action.type === "added") {
//   return [
//     ...tasks,
//     {
//       id: action.id,
//       text: action.text,
//       done: false,
//     },
//   ];
// } else if (action.type === "changed") {
//   return tasks.map((t) => {
//     if (t.id === action.task.id) {
//       return {
//         ...t,
//         text: action.task.text,
//         done: action.task.done,
//       };
//     } else {
//       return t;
//     }
//   });
// } else if (action.type === "deleted") {
//   return tasks.filter((t) => t.id !== action.id);
// } else {
//   throw new Error("No action mateched");
// }
/*---------------- best way to used switch-----------------*/
// best way used for immer use-immer
export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added":
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index].text = action.task.text;
      draft[index].done = action.task.done;
      break;
    }
    case "deleted":
      return draft.filter((t) => t.id !== action.id);

    default:
      throw new Error("No action matched");
  }
}

// dynamically

// export default function taskReducer(tasks, action) {
//   switch (action.type) {
//     case "added":
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];

//     case "changed":
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return {
//             ...t,
//             text: action.task.text,
//             done: action.task.done,
//           };
//         } else {
//           return t;
//         }
//       });
//     case "deleted":
//       return tasks.filter((t) => t.id !== action.id);
//     default:
//       throw new Error("No action matched ");
//   }
// }
