import {
    enumDisplay,
    formatBoolean,
    getModuleRoute,
    getStoreValue,
    historyPush,
    YteColumn,
    YteCriteriaAndQueryPanel,
    YteForm,
    YteFormElement,
    YteRangeInput,
    YteTextInput
} from "yte-react-core";
import {Component} from 'react';

class EtiketSorgula extends Component {

    criteriaPanelComponent = ({queryInfo, handleQueryInfoChange, getTargetPathValue}) => {
        return <YteForm key="yte-react-criteriaPanel">
            <YteFormElement label="etiket.ad" sectionId={5}>
                <YteTextInput value={getTargetPathValue(queryInfo, "eq.ad")}
                              onChange={newValue => handleQueryInfoChange({path: "eq.ad", value: newValue})}/>
            </YteFormElement>
            <YteFormElement label="etiket.olusturulmaTarihi" sectionId={5}>
                <YteRangeInput type="Date"
                               minProps={{
                                   value: getTargetPathValue(queryInfo, "rng.olusturulmaTarihi.minValue"),
                                   onChange: (newValue => handleQueryInfoChange({
                                       path: "rng.olusturulmaTarihi.minValue",
                                       value: newValue
                                   }))
                               }}
                               maxProps={{
                                   value: getTargetPathValue(queryInfo, "rng.olusturulmaTarihi.maxValue"),
                                   onChange: (newValue => handleQueryInfoChange({
                                       path: "rng.olusturulmaTarihi.maxValue",
                                       value: newValue
                                   }))
                               }}/>
            </YteFormElement>

        </YteForm>
    }

    rowClick = (row) => {
        let moduleRouteViewPageUrl = getStoreValue("moduleRouteViewPageUrl");
        historyPush(this.props, getModuleRoute(this.props) + "/" + moduleRouteViewPageUrl + "?id=" + (row.data.id), true);
    };

    render() {
        return <YteCriteriaAndQueryPanel
            queryUrl="/etiket/sorgula"
            deleteUrl="/etiket/pasiflestir"
            criteriaPanelComponent={this.criteriaPanelComponent}
            dataTableProps={{onRowClick: this.rowClick}}>
            <YteColumn field="ad" header="etiket.ad"/>
            <YteColumn field="olusturulmaTarihi" header="etiket.olusturulmaTarihi"/>
        </YteCriteriaAndQueryPanel>
    }

}

export default EtiketSorgula;