import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { gameboard as gb } from '@/utils/data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [ gameboard, setGameBoard ] = useState(gb);
  const [ currentPlayer, setCurrentPlayer ] = useState('player1');
  const [ selectedSquare, setSelectedSquare ] = useState('')

  const handleSelection = (squareClicked: any) => {

    //Do nothing if the current player
    if(currentPlayer !== squareClicked.occupiedBy.name){
      return
    }
    
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-[800px] h-[800px] flex flex-wrap'>

          <div className='flex flex-col'>
          {gameboard.map((row: any, rowIndex: number) => {
            return <div key={rowIndex} className='flex'>
            {row.map((square: any, colIndex: number) => {
              const test = square.backgroundColor;

              return(
                <div key={colIndex} className={`w-[100px] h-[100px] flex justify-center items-center ${test}`}>
                {square.occupiedBy.name && 
                  <div onClick={() => {
                    handleSelection(square)
                  }} className={`w-3/4 h-3/4 rounded-full  ${square.occupiedBy.name === 'player1' ? ' bg-black' : 'bg-red-500'}`}>

                  </div>
                }
              </div>
              )
            })}
            </div>
          })}
          </div>

          <button onClick={() => {
            if(1 === 1){
              let f = { g: () => 1};
              console.log('JEAHHHHH: ', typeof f)
            }
          }}>HEREEREEr</button>
          
        </div>
    </div>
  )
}
