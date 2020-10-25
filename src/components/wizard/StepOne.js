import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody
} from "reactstrap";

class StepOne extends Component {
    render() {
		
        console.log('this.props', this.props);	
          
        const localFood = this.props.food.map(item => {
            if(item.FoodGroup === 'Breakfast') return item;
        }).filter(el => { return el !== null && el !== '' && el !== undefined; });
		
		var item1 = Math.floor(Math.random() * localFood.length);
		var item2 = Math.floor(Math.random() * localFood.length);
		var item3 = Math.floor(Math.random() * localFood.length);
		do {
			item2 = Math.floor(Math.random() * localFood.length);
		}
		while (item2 == item1);
		do {
			item3 = Math.floor(Math.random() * localFood.length);
		}
		while (item3 == item1 || item3 == item2);

		
		var image1 = "./images/" + localFood[item1].ImageURL;
		var image2 = "./images/" + localFood[item2].ImageURL;
		var image3 = "./images/" + localFood[item3].ImageURL;
		
        console.log(localFood);

        return (
            <Container>
				<div className="rowPadding" >
                <Row>
                    <Col>
                        <Card>
						
                            <CardImg width="100%" src={image1} alt={localFood[item1].name} />
                            <CardBody>
                                <CardTitle>{localFood[item1].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[item1].Calories}<br></br>Cost: ${localFood[item1].Cost}</CardSubtitle>
                                <CardText>{localFood[item1].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepOne', this.props.context);
                                    this.props.callback(localFood[item1].Cost, localFood[item1].Calories, this.props.context);
                                    this.props.goToStep(2);
                                }}>Select</Button>&nbsp;
                        <Button id="StepOneItem1" title="Show Details">&#8226;&#8226;&#8226;</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepOneItem1">
                                    <PopoverHeader>{localFood[item1].name}</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">{localFood[item1].Calories}</td></tr>
                                            <tr><td class="nft-dv" colspan="4">% Daily Value *</td></tr>
                                            <tr><td class="nfttd" colspan="3"><span class="major-amt">Total Fat</span> <span class="FAT">0g</span></td><td class="nftDVb FATDV">0%</td></tr>
                                            <tr><td colspan="3" class="sub-amt">Saturated Fat <span class="FASAT">0g</span></td><td class="nftDVb FASATDV">0%</td></tr>
                                            <tr><td colspan="4" class="sub-amt"><em>Trans</em> Fat <span class="FATRN">~g</span></td></tr>
                                            <tr><td colspan="3" class="nfttd cholesterol"><span class="major-amt">Cholesterol</span> <span class="CHOLE">0mg</span></td><td class="nftDVb cholesterol CHOLEDV">0%</td></tr>
                                            <tr><td colspan="3" class="nfttd"><span class="major-amt">Sodium</span> <span class="NA">11mg</span></td><td class="nftDVb border-t NADV">0%</td></tr>
                                            <tr><td colspan="3" class="nfttd"><span class="major-amt">Total Carbohydrate</span> <span class="CHOCDF">1.6g</span></td><td class="nftDVb CHOCDFDV">1%</td></tr>
                                            <tr><td colspan="3" class="sub-amt">Dietary Fiber <span class="FIBTG">0g</span></td><td class="nftDVc FIBTGDV">0%</td></tr>
                                            <tr><td colspan="3" class="sub-amt-nb">Total Sugars <span class="SUGAR">0.5g</span></td><td class="nftDVb SUGARDV">1%</td></tr>
                                            <tr><td class="blnk"></td><td class="blnk"></td>
                                                <td class="sub-sub-amt">Includes <span class="ADD_SG">~g</span> Added Sugars</td><td class="nftDVb nftbt ADD_SGDV">~%</td>
                                            </tr>
                                            <tr><td colspan="3" class="nftbt nfttd"><span class="major-amt">Protein</span> <span class="PROCNT">0g</span></td><td class="nftDVb PROCNTDV">0%</td></tr>
                                            <tr class="borderbrk"><td class="nfttd" colspan="3">Vitamin C <span class="VITC">0mg</span></td><td class="nftDV VITCDV">0%</td>
                                            </tr><tr><td class="nfttd" colspan="3">Vitamin D <span class="VITD">0μg</span></td><td class="nftDV VITDDV">0%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Iron <span class="FE">0.2mg</span></td><td class="nftDV FEDV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Calcium <span class="CA">7mg</span></td><td class="nftDV CADV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Potassium <span class="K">60mg</span></td><td class="nftDV KDV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Phosphorus <span class="P">12mg</span></td><td class="nftDV PDV">1%</td></tr>
                                            <tr><td class="nfttxt" colspan="4">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</td></tr>
                                        </tbody></table></PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardImg width="100%" src={image2} alt={localFood[item2].name} />
                            <CardBody>
                            <CardTitle>{localFood[item2].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[item2].Calories}<br></br>Cost: ${localFood[item2].Cost}</CardSubtitle>
                                <CardText>{localFood[item2].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepOne', this.props.context);
                                    this.props.callback(localFood[item2].Cost, localFood[item2].Calories, this.props.context);
                                    this.props.goToStep(2);
                                }}>Select</Button>&nbsp;
                        <Button id="StepOneItem2" title="Show Details">&#8226;&#8226;&#8226;</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepOneItem2">
                                    <PopoverHeader>{localFood[item2].name}</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">{localFood[item2].Calories}</td></tr>
                                            <tr><td class="nft-dv" colspan="4">% Daily Value *</td></tr>
                                            <tr><td class="nfttd" colspan="3"><span class="major-amt">Total Fat</span> <span class="FAT">0g</span></td><td class="nftDVb FATDV">0%</td></tr>
                                            <tr><td colspan="3" class="sub-amt">Saturated Fat <span class="FASAT">0g</span></td><td class="nftDVb FASATDV">0%</td></tr>
                                            <tr><td colspan="4" class="sub-amt"><em>Trans</em> Fat <span class="FATRN">~g</span></td></tr>
                                            <tr><td colspan="3" class="nfttd cholesterol"><span class="major-amt">Cholesterol</span> <span class="CHOLE">0mg</span></td><td class="nftDVb cholesterol CHOLEDV">0%</td></tr>
                                            <tr><td colspan="3" class="nfttd"><span class="major-amt">Sodium</span> <span class="NA">11mg</span></td><td class="nftDVb border-t NADV">0%</td></tr>
                                            <tr><td colspan="3" class="nfttd"><span class="major-amt">Total Carbohydrate</span> <span class="CHOCDF">1.6g</span></td><td class="nftDVb CHOCDFDV">1%</td></tr>
                                            <tr><td colspan="3" class="sub-amt">Dietary Fiber <span class="FIBTG">0g</span></td><td class="nftDVc FIBTGDV">0%</td></tr>
                                            <tr><td colspan="3" class="sub-amt-nb">Total Sugars <span class="SUGAR">0.5g</span></td><td class="nftDVb SUGARDV">1%</td></tr>
                                            <tr><td class="blnk"></td><td class="blnk"></td>
                                                <td class="sub-sub-amt">Includes <span class="ADD_SG">~g</span> Added Sugars</td><td class="nftDVb nftbt ADD_SGDV">~%</td>
                                            </tr>
                                            <tr><td colspan="3" class="nftbt nfttd"><span class="major-amt">Protein</span> <span class="PROCNT">0g</span></td><td class="nftDVb PROCNTDV">0%</td></tr>
                                            <tr class="borderbrk"><td class="nfttd" colspan="3">Vitamin C <span class="VITC">0mg</span></td><td class="nftDV VITCDV">0%</td>
                                            </tr><tr><td class="nfttd" colspan="3">Vitamin D <span class="VITD">0μg</span></td><td class="nftDV VITDDV">0%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Iron <span class="FE">0.2mg</span></td><td class="nftDV FEDV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Calcium <span class="CA">7mg</span></td><td class="nftDV CADV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Potassium <span class="K">60mg</span></td><td class="nftDV KDV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Phosphorus <span class="P">12mg</span></td><td class="nftDV PDV">1%</td></tr>
                                            <tr><td class="nfttxt" colspan="4">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</td></tr>
                                        </tbody></table></PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardImg width="100%" src={image3} alt={localFood[item3].name} />
                            <CardBody>
                            <CardTitle>{localFood[item3].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[item3].Calories}<br></br>Cost: ${localFood[item3].Cost}</CardSubtitle>
                                <CardText>{localFood[item3].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepOne', this.props.context);
                                    this.props.callback(localFood[item3].Cost, localFood[item3].Calories, this.props.context);
                                    this.props.goToStep(2);
                                }}>Select</Button>&nbsp;<Button id="StepOneItem3" title="Show Details">&#8226;&#8226;&#8226;</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepOneItem3">
                                    <PopoverHeader>{localFood[item3].name}</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">{localFood[item3].Calories}</td></tr>
                                            <tr><td class="nft-dv" colspan="4">% Daily Value *</td></tr>
                                            <tr><td class="nfttd" colspan="3"><span class="major-amt">Total Fat</span> <span class="FAT">0g</span></td><td class="nftDVb FATDV">0%</td></tr>
                                            <tr><td colspan="3" class="sub-amt">Saturated Fat <span class="FASAT">0g</span></td><td class="nftDVb FASATDV">0%</td></tr>
                                            <tr><td colspan="4" class="sub-amt"><em>Trans</em> Fat <span class="FATRN">~g</span></td></tr>
                                            <tr><td colspan="3" class="nfttd cholesterol"><span class="major-amt">Cholesterol</span> <span class="CHOLE">0mg</span></td><td class="nftDVb cholesterol CHOLEDV">0%</td></tr>
                                            <tr><td colspan="3" class="nfttd"><span class="major-amt">Sodium</span> <span class="NA">11mg</span></td><td class="nftDVb border-t NADV">0%</td></tr>
                                            <tr><td colspan="3" class="nfttd"><span class="major-amt">Total Carbohydrate</span> <span class="CHOCDF">1.6g</span></td><td class="nftDVb CHOCDFDV">1%</td></tr>
                                            <tr><td colspan="3" class="sub-amt">Dietary Fiber <span class="FIBTG">0g</span></td><td class="nftDVc FIBTGDV">0%</td></tr>
                                            <tr><td colspan="3" class="sub-amt-nb">Total Sugars <span class="SUGAR">0.5g</span></td><td class="nftDVb SUGARDV">1%</td></tr>
                                            <tr><td class="blnk"></td><td class="blnk"></td>
                                                <td class="sub-sub-amt">Includes <span class="ADD_SG">~g</span> Added Sugars</td><td class="nftDVb nftbt ADD_SGDV">~%</td>
                                            </tr>
                                            <tr><td colspan="3" class="nftbt nfttd"><span class="major-amt">Protein</span> <span class="PROCNT">0g</span></td><td class="nftDVb PROCNTDV">0%</td></tr>
                                            <tr class="borderbrk"><td class="nfttd" colspan="3">Vitamin C <span class="VITC">0mg</span></td><td class="nftDV VITCDV">0%</td>
                                            </tr><tr><td class="nfttd" colspan="3">Vitamin D <span class="VITD">0μg</span></td><td class="nftDV VITDDV">0%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Iron <span class="FE">0.2mg</span></td><td class="nftDV FEDV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Calcium <span class="CA">7mg</span></td><td class="nftDV CADV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Potassium <span class="K">60mg</span></td><td class="nftDV KDV">1%</td></tr>
                                            <tr><td class="nfttd" colspan="3">Phosphorus <span class="P">12mg</span></td><td class="nftDV PDV">1%</td></tr>
                                            <tr><td class="nfttxt" colspan="4">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</td></tr>
                                        </tbody></table></PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
				</div>


            </Container>
        );
    }
}

export default StepOne;
