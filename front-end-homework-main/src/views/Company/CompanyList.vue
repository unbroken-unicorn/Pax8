<template>
    <div>
        <h1>Company list</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="company in companies" v-bind:key="company.id">
                    <th scope="row">{{company.id}}</th>
                    <td><a href="" v-on:click="ViewCompany">{{company.name}}</a></td>
                    <td><button v-on:click.once="EditCompany">Edit</button></td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import CompanyService from "../../services/CompanyService";
// import CompanyEdit from "./services/CompanyEdit";

export default {
   name: 'CompanyList',
    data() {
        return {
            companies: {
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
            CompanyService.getAll()
            .then(results => {
                //  JSON responses automatically parsed
                this.companies = results;
                console.log('Getting companies');
                console.dir(this.companies);
            })
            .catch(e => {
                this.errors.push(e)
            })

    },
    methods: {
        EditCompany() {
            console.log('In Edit Company');
            // this.$router.push('/CompanyEdit');
        },
        ViewCompany() {
            console.log('In View Company');
            this.$router.push({name:'CompanyView', params: {companyId: this.companies.id}});
        }
    }
}
</script>

<style>



</style>