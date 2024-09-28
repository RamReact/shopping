import React from 'react';
import { SiParsedotly } from "react-icons/si";
import { CategoryDataArray, CategoryItem } from '../../Typescript/category';
import CategoryData from '../../Assets/json/category.json';

// Type for category data props
interface DetailsComponentProps {
    cateId:string;
}



class DetailsComponent extends React.Component<DetailsComponentProps, {}> {
    constructor(props: DetailsComponentProps) {
        super(props);
        // Initialize state if needed
        this.state = {};
    }

    render() {
        const categoryData = (CategoryData as CategoryDataArray)[this.props.cateId];
        return (
            <div className='description-seciton-main'>
                <div className='para-section'>
                    {
                        categoryData?.Description?.para?.length > 0 && categoryData.Description.para.map((data, index) => {
                            return (
                                <p key={index} className='Description-text'>{data}</p>
                            );
                        })
                    }
                </div>
                <div className='outline-section'>
                    <div className='outline-heading'>
                        {categoryData?.Description?.outline?.heading}
                    </div>
                    <div className='outline-points'>
                        {
                            categoryData?.Description?.outline?.points?.length > 0 && categoryData.Description.outline.points.map((data, index) => {
                                return (
                                    <div key={index} className="points-container">
                                        <SiParsedotly className='bullet-points' />
                                        <p className='outline-points'>{data}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsComponent;
