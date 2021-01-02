import {Component} from 'react';
import {
    getTargetPathValue,
    handleTargetPathValueChange, YteEnumInput, YteForm,
    YteFormElement, YteMoneyInput, YteNumberInput, YteSelectInput,
    YteTextInput,
    YteUpdateComponent,
    YteValidator
} from "yte-react-core";

class KalemTuruGuncelle extends Component {

    validations = {
        "state.item.name": {length: {gt: 2}},
        "state.item.seller": {presence: true},
        "state.item.price": {money: {ge: 2000}},
        "state.item.remainingCount": {number: {le: 4000}},
        "state.item.categories": {presence: true}
    }

    render() {
        return <YteValidator target={this}>
            {
                ({error, hasError}) => {
                    return <YteUpdateComponent history={this.props.history} confirmDisabled={hasError}
                                               location={this.props.location} getItemParams={this.props.getItemParams}
                                               target={this} getUrl={"/tahakkuk-turu/get"} updateUrl={"/tahakkuk-turu/update"}>
                        <YteForm>
                            <YteFormElement sectionId={1} labelId="nameLabel" label="tahakkuk-turu.name" error={error}
                                            errorPath="state.item.name">
                                <YteTextInput value={getTargetPathValue(this, "state.item.name")}
                                              onChange={newValue => handleTargetPathValueChange({
                                                  target: this,
                                                  path: "item.name",
                                                  value: newValue
                                              })}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="sellerLabel" label="tahakkuk-turu.seller" error={error}
                                            errorPath="state.item.seller">
                                <YteSelectInput value={getTargetPathValue(this, "state.item.seller")}
                                                onChange={newValue => handleTargetPathValueChange({
                                                    target: this,
                                                    path: "item.seller",
                                                    value: newValue
                                                })} options={["Dell", "Apple", "Faber Castell", "Microsoft"]}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="priceLabel" label="tahakkuk-turu.price" error={error}
                                            errorPath="state.item.price">
                                <YteMoneyInput value={getTargetPathValue(this, "state.item.price")}
                                               onChange={newValue => handleTargetPathValueChange({
                                                   target: this,
                                                   path: "item.price",
                                                   value: newValue
                                               })}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="remainingCountLabel" label="tahakkuk-turu.remainingCount"
                                            error={error} errorPath="state.item.remainingCount">
                                <YteNumberInput value={getTargetPathValue(this, "state.item.remainingCount")}
                                                onChange={newValue => handleTargetPathValueChange({
                                                    target: this,
                                                    path: "item.remainingCount",
                                                    value: newValue
                                                })}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="categoriesLabel" label="tahakkuk-turu.categories"
                                            error={error} errorPath="state.item.categories">
                                <YteEnumInput enumName="EnumCategories"
                                              value={getTargetPathValue(this, "state.item.categories")}
                                              onChange={newValue => handleTargetPathValueChange({
                                                  target: this,
                                                  path: "item.categories",
                                                  value: newValue
                                              })}/>
                            </YteFormElement>
                        </YteForm>
                    </YteUpdateComponent>
                }
            }
        </YteValidator>
    }
}

export default KalemTuruGuncelle;