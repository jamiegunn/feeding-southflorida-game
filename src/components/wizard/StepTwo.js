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

class StepTwo extends Component {
    render() {
        console.log('this.props', this.props);

        const localFood = this.props.food.map(item => {
            if(item.FoodGroup === 'More') return item;
        }).filter(el => { return el !== null && el !== '' && el !== undefined; });

        console.log('localFood', localFood);

        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardImg width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{localFood[0].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[0].Calories}<br></br>Cost: ${localFood[0].Cost}</CardSubtitle>
                                <CardText>{localFood[0].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepTwo', this.props.context);
                                    this.props.callback(localFood[0].Cost, localFood[0].Calories, this.props.context);
                                    this.props.goToStep(3);
                                }}>Select</Button>&nbsp;
                        <Button id="StepOneItem1">Show Details</Button>
                                <UncontrolledPopover placement="bottom" trigger="focus" placement="right" target="StepOneItem1">
                                    <PopoverHeader>Oak Wood Chips - 20lbs</PopoverHeader>
                                    <PopoverBody><table>
                                        <tbody><tr><th colspan="4" class="NF-main-header">Nutrition Facts</th></tr>
                                            <tr><td colspan="4" class="nfserv">Serving Size</td></tr>
                                            <tr><td colspan="4" class="nfserv-amt">
                                            <span class="selectedServing">100 grams</span>
                                            (<span class="foodWeight">100g</span>)</td></tr>
                                            <tr><td class="borderbrk" colspan="4"></td></tr>
                                            <tr><td class="nft-cals" colspan="3">Calories</td><td class="nft-cal-amt ENERC_KCAL">49</td></tr>
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
                            <CardImg width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{localFood[1].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[1].Calories}<br></br>Cost: ${localFood[1].Cost}</CardSubtitle>
                                <CardText>{localFood[1].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepTwo', this.props.context);
                                    this.props.callback(localFood[1].Cost, localFood[1].Calories, this.props.context);
                                    this.props.goToStep(3);
                                }}>Select</Button>&nbsp;
                                    <Button>Show Details</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardImg width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{localFood[2].name}</CardTitle>
                                <CardSubtitle>Calories: {localFood[2].Calories}<br></br>Cost: ${localFood[2].Cost}</CardSubtitle>
                                <CardText>{localFood[2].FunFact}</CardText>
                                <Button onClick={() => {
                                    console.log('context passed to StepTwo', this.props.context);
                                    this.props.callback(localFood[2].Cost, localFood[2].Calories, this.props.context);
                                    this.props.goToStep(3);
                                }}>Select</Button>&nbsp;
                                     <Button>Show Details</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default StepTwo;
