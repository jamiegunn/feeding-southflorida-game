import React, { Component } from "react";
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

class StepThree extends Component {
    render() {
        console.log('this.props', this.props);

        const localFood = this.props.food.map(item => {
            if(item.FoodGroup === 'Dinner') return item;
        }).filter(el => { return el !== null && el !== '' && el !== undefined; });

        var item7 = Math.floor(Math.random() * localFood.length);
		var item8 = Math.floor(Math.random() * localFood.length);
		var item9 = Math.floor(Math.random() * localFood.length);		
		do {
			item8 = Math.floor(Math.random() * localFood.length);
		}
		while (item8 == item7);
		do {
			item9 = Math.floor(Math.random() * localFood.length);
		}
		while (item9 == item7 || item9 == item8);
		
		var image7 = "./images/" + localFood[item7].ImageURL;
		var image8 = "./images/" + localFood[item8].ImageURL;
		var image9 = "./images/" + localFood[item9].ImageURL;
		
        console.log('localFood', localFood);

        return (
            <Container>
				<div className="rowPadding" >
                <Row>
                    <Col>
                        <Card>
                            <CardImg width="100%" src={image7} alt={localFood[item7].name} />
                            <CardBody>
                                <CardTitle>{localFood[item7].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[item7].Calories}<br></br>Cost: ${localFood[item7].Cost}</CardSubtitle>
                                <CardText>{localFood[item7].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepOne', this.props.context);
                                    this.props.callback(localFood[item7].Cost, localFood[item7].Calories, this.props.context);
                                    this.props.goToStep(4);
                                }}>Select</Button>&nbsp;
                        <Button id="StepThreeItem7" title="Show Details">&#8226;&#8226;&#8226;</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepThreeItem7">
                                    <PopoverHeader>{localFood[item7].name}</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">{localFood[item7].Calories}</td></tr>
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
                            <CardImg width="100%" src={image8} alt={localFood[item8].name} />
                            <CardBody>
                            <CardTitle>{localFood[item8].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[item8].Calories}<br></br>Cost: ${localFood[item8].Cost}</CardSubtitle>
                                <CardText>{localFood[item8].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepOne', this.props.context);
                                    this.props.callback(localFood[item8].Cost, localFood[item8].Calories, this.props.context);
                                    this.props.goToStep(4);
                                }}>Select</Button>&nbsp;
                        <Button id="StepThreeItem8" title="Show Details">&#8226;&#8226;&#8226;</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepThreeItem8">
                                    <PopoverHeader>{localFood[item8].name}</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">{localFood[item8].Calories}</td></tr>
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
                            <CardImg width="100%" src={image9} alt={localFood[item9].name} />
                            <CardBody>
                            <CardTitle>{localFood[item9].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[item9].Calories}<br></br>Cost: ${localFood[item9].Cost}</CardSubtitle>
                                <CardText>{localFood[item9].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepOne', this.props.context);
                                    this.props.callback(localFood[item9].Cost, localFood[item9].Calories, this.props.context);
                                    this.props.goToStep(4);
                                }}>Select</Button>&nbsp;
                        <Button id="StepThreeItem9" title="Show Details">&#8226;&#8226;&#8226;</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepThreeItem9">
                                    <PopoverHeader>{localFood[item9].name}</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">{localFood[item9].Calories}</td></tr>
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

export default StepThree;
