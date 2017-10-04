export function manageFriends(state, action) {
  switch(action.type) {
    case 'ADD_FRIEND': {
      const newFriends = {friends: [...state.friends, action.friend]}
      return {...state, ...newFriends};
    }
    case 'REMOVE_FRIEND': {
      const newFriends = state.friends.filter((friend) => friend.id !== action.id);
      return {friends: newFriends};
    }
    default:
      return state;
  }
}
