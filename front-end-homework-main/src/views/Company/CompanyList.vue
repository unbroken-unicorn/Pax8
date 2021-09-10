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
                    <td>{{company.name}}</td>
                    <td><button v-on:click.once="EditCompany">Edit</button></td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import CompanyService from "../../services/CompanyService";

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
        }
    }
}
</script>

<style>



</style>