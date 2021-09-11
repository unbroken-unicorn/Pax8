<template>
    <div>
        <p>Number of Employees</p>
        <form>
            {{ employees }}
        </form>
        
    <p>
    <button v-on:click.prevent="incrementEmployees">Increment ++</button>
    <button v-on:click.prevent="decrementEmployees">Decrement --</button>
    ></p>
        
    </div>
</template>

<script>
// import CompanyService from "../../services/CompanyService";

export default {
   name: 'CompanyEmployees',
    data() {
        return {
            employees: ""
        };
    },
    methods: {
        incrementEmployees() {
            this.employees += 1;
        },
        decrementEmployees() {
            this.employees += 1;
        }
    }
}
</script>

<style>

</style>
