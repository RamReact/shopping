import React,{Component} from "react";
import { GiFlowerStar } from "react-icons/gi";
interface Props {
    heading: string;  // This prop will hold the heading text
  }
class Heading extends Component<Props,{}>{
render(){
    return(
            <div className="site-heading">
                <GiFlowerStar className="heading-icon" /><span className="heading-dash"></span>
                <span className="headin-hd">{this.props.heading}</span>
                <span className="heading-dash"></span><GiFlowerStar className="heading-icon"  /></div>
    )
    
}
}
export default Heading;