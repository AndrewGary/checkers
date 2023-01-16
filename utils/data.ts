export interface Square {
  id: number;
  x: number;
  y: number;
  occupiedBy: {
    name: string | null;
    kinged: boolean;
  };
  backgroundColor: string;
  selected: boolean;
  movable: false;
  row: number;
  col: number;
}

export const gameboard: Square[][] = [
  // #1
  [
    {
      id: 0,
      x: 0,
      y: 0,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 0,
      col: 0
    },
    {
      id: 1,
      x: 1,
      y: 0,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 0,
      col: 1
    },
    {
      id: 2,
      x: 2,
      y: 0,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 0,
      col: 2
    },
    {
      id: 3,
      x: 3,
      y: 0,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 0,
      col: 3
    },
    {
      id: 4,
      x: 4,
      y: 0,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 0,
      col: 4
    },
    {
      id: 5,
      x: 5,
      y: 0,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 0,
      col: 5
    },
    {
      id: 6,
      x: 6,
      y: 0,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 0,
      col: 6
    },
    {
      id: 7,
      x: 7,
      y: 0,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 0,
      col: 7
    },
  ],

  //   #2
  [
    {
      id: 8,
      x: 0,
      y: 1,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 1,
      col: 0
    },
    {
      id: 9,
      x: 1,
      y: 1,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 1,
      col: 1
    },
    {
      id: 10,
      x: 2,
      y: 1,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 1,
      col: 2
    },
    {
      id: 11,
      x: 3,
      y: 1,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 1,
      col: 3
    },
    {
      id: 12,
      x: 4,
      y: 1,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 1,
      col: 4
    },
    {
      id: 13,
      x: 5,
      y: 1,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 1,
      col: 5
    },
    {
      id: 14,
      x: 6,
      y: 1,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 1,
      col: 6
    },
    {
      id: 15,
      x: 7,
      y: 1,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 1,
      col: 7
    },
  ],

  //   #3
  [
    {
      id: 16,
      x: 0,
      y: 2,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 2,
      col: 0 
    },
    {
      id: 17,
      x: 1,
      y: 2,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 2,
      col: 1 
    },
    {
      id: 18,
      x: 2,
      y: 2,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 2,
      col: 2 
    },
    {
      id: 19,
      x: 3,
      y: 2,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 2,
      col: 3 
    },
    {
      id: 20,
      x: 4,
      y: 2,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 2,
      col: 4 
    },
    {
      id: 21,
      x: 5,
      y: 2,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 2,
      col: 5 
    },
    {
      id: 22,
      x: 6,
      y: 2,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 2,
      col: 6 
    },
    {
      id: 23,
      x: 7,
      y: 2,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 2,
      col: 7 
    },
  ],

  // #4
  [
    {
      id: 24,
      x: 0,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 3,
      col: 0 
    },
    {
      id: 25,
      x: 1,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 3,
      col: 1 
    },
    {
      id: 26,
      x: 2,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 3,
      col: 2 
    },
    {
      id: 27,
      x: 3,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 3,
      col: 3 
    },
    {
      id: 28,
      x: 4,
      y: 3,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 3,
      col: 4 
    },
    {
      id: 29,
      x: 5,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 3,
      col: 5 
    },
    {
      id: 30,
      x: 6,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 3,
      col: 6 
    },
    {
      id: 31,
      x: 7,
      y: 3,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 3,
      col: 7 
    },
  ],

  //   #5
  [
    {
      id: 32,
      x: 0,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 4,
      col: 0
    },
    {
      id: 33,
      x: 1,
      y: 4,
      occupiedBy: {
        name: "player1",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 4,
      col: 1
    },
    {
      id: 34,
      x: 2,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 4,
      col: 2
    },
    {
      id: 35,
      x: 3,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 4,
      col: 3
    },
    {
      id: 36,
      x: 4,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 4,
      col: 4
    },
    {
      id: 37,
      x: 5,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 4,
      col: 5
    },
    {
      id: 38,
      x: 6,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 4,
      col: 6
    },
    {
      id: 39,
      x: 7,
      y: 4,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 4,
      col: 7
    },
  ],

  //   $6
  [
    {
      id: 40,
      x: 0,
      y: 5,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 5,
      col: 0 
    },
    {
      id: 41,
      x: 1,
      y: 5,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 5,
      col: 1 
    },
    {
      id: 42,
      x: 2,
      y: 5,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 5,
      col: 2 
    },
    {
      id: 43,
      x: 3,
      y: 5,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 5,
      col: 3 
    },
    {
      id: 44,
      x: 4,
      y: 5,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 5,
      col: 4 
    },
    {
      id: 45,
      x: 5,
      y: 5,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 5,
      col: 5 
    },
    {
      id: 46,
      x: 6,
      y: 5,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 5,
      col: 6 
    },
    {
      id: 47,
      x: 7,
      y: 5,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 5,
      col: 7 
    },
  ],

  //   #7
  [
    {
      id: 48,
      x: 0,
      y: 6,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 6,
      col: 0 
    },
    {
      id: 49,
      x: 1,
      y: 6,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 6,
      col: 1 
    },
    {
      id: 50,
      x: 2,
      y: 6,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 6,
      col: 2 
    },
    {
      id: 51,
      x: 3,
      y: 6,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 6,
      col: 3 
    },
    {
      id: 52,
      x: 4,
      y: 6,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 6,
      col: 4 
    },
    {
      id: 53,
      x: 5,
      y: 6,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 6,
      col: 5 
    },
    {
      id: 54,
      x: 6,
      y: 6,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 6,
      col: 6 
    },
    {
      id: 55,
      x: 7,
      y: 6,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 6,
      col: 7 
    },
  ],

  //   #8
  [
    {
      id: 56,
      x: 0,
      y: 7,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 7,
      col: 0 
    },
    {
      id: 57,
      x: 1,
      y: 7,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 7,
      col: 1 
    },
    {
      id: 58,
      x: 2,
      y: 7,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 7,
      col: 2 
    },
    {
      id: 59,
      x: 3,
      y: 7,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 7,
      col: 3 
    },
    {
      id: 60,
      x: 4,
      y: 7,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 7,
      col: 4 
    },
    {
      id: 61,
      x: 5,
      y: 7,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 7,
      col: 5 
    },
    {
      id: 62,
      x: 6,
      y: 7,
      occupiedBy: {
        name: "player2",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-75",
      selected: false,
      movable: false,
      row: 7,
      col: 6 
    },
    {
      id: 63,
      x: 7,
      y: 7,
      occupiedBy: {
        name: "",
        kinged: false,
      },
      backgroundColor: "bg-gray-800 bg-opacity-50",
      selected: false,
      movable: false,
      row: 7,
      col: 7 
    },
  ],
];
