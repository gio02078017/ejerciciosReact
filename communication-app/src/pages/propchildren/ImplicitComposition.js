import React,{Component} from 'react'
import { Counter, Title, Button } from '../../components/Counter'

export default class ImplicitComposition extends Component {
    render() {
        return (
            <div>
            <Counter>
              <Title />
              <Button type='increment' />
              <Title>
                {(click) => (
                  <div style={{ color: 'purple' }}>
                    <h1>{ click }</h1>
                  </div>
                )}
              </Title>
              <Button type='decrement' />
            </Counter>
          </div>
        )
    }
}
