<template>
    <div>
        <h1>Company Info</h1>

        <p><strong>Name: {{ company.name }} ({{ company.id }})</strong></p>

        <p>
            <strong>Domain:</strong> {{ company.domain }}<br>
            <strong># Employees:</strong> {{ company.numberOfEmployees }}<br>
            <strong># Subscriptions/Employee:</strong> {{ company.subscriptionsPerEmployee }}<br>
        </p>

    </div>
</template>

<script>
import CompanyService from "../../services/CompanyService";

export default {
    name: 'CompanyView',
    data() {
        return {
            companyId: "",
            company: {
                id: "",
                name: "",
                domain: "",
                numberOfEmployees: "",
                subscriptionsPerEmployee: ""
            }
        };
    },
    created: function() {
            // fetches all companies when component is created
            // CompanyService.getById(this.$route.query.companyId)
            // CompanyService.getById(companyId)
            CompanyService.getById(1)
            .then(results => {
                //  JSON responses automatically parsed
                this.company = results;
                console.log('Getting company');
                console.dir(this.company);
            })
            .catch(e => {
                this.errors.push(e)
            })

    },
   
}
</script>

<style>

</style>
