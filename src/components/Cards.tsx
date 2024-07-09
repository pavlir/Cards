import {PropsWithChildren, ReactNode} from 'react'

interface ICardProps {
	src? : string,
	children : ReactNode
}

export const Cards : React.FC<PropsWithChildren<ICardProps>> = (props) => {
	const {src, children} = props;

	const img = src ? <img src={src} className='card-img-top' alt='card img'/> : null;

  return (
    <div className='card'>
			{img}
			<div className='card-body'>
				{children}
			</div>
    </div>
  )
}
