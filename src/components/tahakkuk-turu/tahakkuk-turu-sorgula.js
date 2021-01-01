import {
    YteColumn,
    YteCriteriaAndQueryPanel,
    YteForm,
    YteFormElement,
    YteTextInput,
    historyPush,
    getModuleRoute,
    getStoreValue
} from "yte-react-core";
import {Component} from 'react';

class TahakkukTuruSorgula extends Component {

    criteriaPanelComponent = ({queryInfo, handleQueryInfoChange, getTargetPathValue}) => {
        return <YteForm key="yte-react-criteriaPanel">
            <YteFormElement label="name (eq)" sectionId={5}>
                <YteTextInput value={getTargetPathValue(queryInfo, "eq.name")}
                              onChange={newValue => handleQueryInfoChange({path: "eq.name", value: newValue})}/>
            </YteFormElement>
        </YteForm>
    }

    rowClick = (row) => {
        let moduleRouteViewPageUrl = getStoreValue("moduleRouteViewPageUrl");
        historyPush(this.props, getModuleRoute(this.props) + "/" + moduleRouteViewPageUrl + "?id=" + (row.data.id), true);
    };

    queryUrl = "/tahakkuk-turu/getAll"

    render() {

        return <YteCriteriaAndQueryPanel
            queryUrl={this.queryUrl}
            deleteUrl="/tahakkuk-turu/delete"
            criteriaPanelComponent={this.criteriaPanelComponent}
            dataTableProps={{onRowClick: this.rowClick}}>

            <YteColumn field="id" header="tahakkuk-turu.id"
                // body={this.idTemplate.bind(this)}
            />
            <YteColumn field="name" header="tahakkuk-turu.name"/>
            <YteColumn field="seller" header="tahakkuk-turu.seller"/>
            <YteColumn field="price.amount" header="tahakkuk-turu.price"/>
            <YteColumn field="remainingCount" header="tahakkuk-turu.remainingCount"/>
        </YteCriteriaAndQueryPanel>
    }

}

export default TahakkukTuruSorgula;