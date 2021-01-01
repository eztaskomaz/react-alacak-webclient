import {Component} from 'react';
import {
    YteAddComponent,
    YteValidator,
    YteForm,
    YteFormElement,
    YteTextInput,
    getTargetPathValue,
    handleTargetPathValueChange, YteSelectInput, YteNumberInput, YteEnumInput, YteMoneyInput, handleRemoteCall
} from "yte-react-core";

class TahakkukTuruEkle extends Component {

    state = {
        stringOptions: [],
        dependedOptions: []
    }

    getIsAttributeHidden = () => {
        return getTargetPathValue(this, "state.item.seller") === "Dell";
    }

    validations = {
        "state.item.name": {length: {gt: 2}},
        "state.item.seller": {presence: true},
        "state.item.price": {money: {ge: 2000}},
        "state.item.remainingCount": {number: {le: 4000}},
        "state.item.categories": {presence: true}
    }

    componentDidMount() {
        handleRemoteCall({
            method: "get",
            targetUrl: "/tahakkuk-turu/getStringList",
            afterOperationSucceeded: (data) => {
                this.setState({stringOptions: data});
            }
        });
    }

    requestForDepended = (string) => {
        console.log(string);
        handleRemoteCall({
            method: "get",
            targetUrl: "/tahakkuk-turu/getDependedList",
            requestBodyParams: {
                stringOptions: string
            },
            afterOperationSucceeded: (data) => {
                this.setState({dependedOptions: data});
            }
        });
    }

    render() {

        return <YteValidator target={this}>
            {
                ({error, hasError}) => {
                    return <YteAddComponent location={this.props.location} history={this.props.history} confirmDisabled={hasError} target={this} addUrl={"/addProduct"} >
                        <YteForm>
                            <YteFormElement sectionId={1} labelId="nameLabel" label="tahakkuk-turu.name" error={error} errorPath="state.item.name">
                                <YteTextInput value={getTargetPathValue(this, "state.item.name")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.name",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="sellerLabel" label="tahakkuk-turu.seller" error={error} errorPath="state.item.seller">
                                <YteSelectInput value={getTargetPathValue(this, "state.item.seller")}
                                                onChange={newValue => handleTargetPathValueChange({target:this, path:"item.seller",value: newValue})}
                                                options={["Dell","Apple","Faber Castell","Microsoft"]}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="priceLabel" label="tahakkuk-turu.price" error={error} errorPath="state.item.price">
                                <YteMoneyInput value={getTargetPathValue(this, "state.item.price")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.price",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="remainingCountLabel" label="tahakkuk-turu.remainingCount" error={error} errorPath="state.item.remainingCount">
                                <YteNumberInput value={getTargetPathValue(this, "state.item.remainingCount")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.remainingCount",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="categoriesLabel" label="tahakkuk-turu.categories" error={error} errorPath="state.item.categories">
                                <YteEnumInput enumName="EnumCategories" value={getTargetPathValue(this, "state.item.categories")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.categories",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="stringLabel" label="tahakkuk-turu.string" error={error} errorPath="state.item.string">
                                <YteSelectInput value={getTargetPathValue(this, "state.item.string")}
                                                onChange={newValue => {
                                                    handleTargetPathValueChange({target:this, path:"item.string",value: newValue})
                                                    this.requestForDepended(newValue);}}
                                                options={this.state.stringOptions}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="dependedLabel" label="tahakkuk-turu.depended" error={error} errorPath="state.item.depended">
                                <YteSelectInput value={getTargetPathValue(this, "state.item.depended")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.depended",value: newValue})} options={this.state.dependedOptions}/>
                            </YteFormElement>
                            <YteFormElement hidden={this.getIsAttributeHidden()} sectionId={1} labelId="attributeLabel" label="tahakkuk-turu.attribute" error={error} errorPath="state.item.attribute">
                                <YteTextInput value={getTargetPathValue(this, "state.item.attribute")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.attribute",value: newValue})}/>
                            </YteFormElement>
                        </YteForm>
                    </YteAddComponent>
                }
            }
        </YteValidator>
    }
}

export default TahakkukTuruEkle;