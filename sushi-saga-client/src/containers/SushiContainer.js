import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi) => {
          return <Sushi sushi={sushi}
                        key={sushi.id}
                        eat={props.eat}
                        taken={props.eaten.includes(sushi)}/>
        })
        }
        <MoreButton more={props.moreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer