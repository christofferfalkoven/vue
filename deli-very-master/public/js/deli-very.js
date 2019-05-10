/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
        el: '#mainVueId',
        data: {
                orders: {},
                menu: food,
                contactInfo: [],
                savedBurgers: [],
                orderedBurgers: [],
                customerOrder:{
                        Firstname: "",
                        Lastname: "",
                        Email: "",
                        PaymentOption: "",
                        Gender: ""
                },
                ord: {
                        x: 0,
                        y: 0,
                        mark: "T",
                },
        },
        created: function () {
                socket.on('initialize', function (data) {
                        this.orders = data.orders;
                }.bind(this));

                socket.on('currentQueue', function (data) {
                        this.orders = data.orders;
                }.bind(this));
        },
        methods: {
                getNext: function () {
                        var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                                return Math.max(last, next);
                        }, 0);
                        return lastOrder + 1;
                },
                printArray: function(){
                        for(var i = 0; i<this.customerOrder.length; i++){
                                console.log(this.customerOrder[i]);
                        }
                },
                getOrder:function(){
                        this.customerOrder.Firstname= document.getElementById("firstname").value;
                        this.customerOrder.Lastname = document.getElementById("lastname").value;
                        this.customerOrder.Email = document.getElementById('email').value;
                        this.customerOrder.PaymentOption= document.getElementById('payment').value;
                        this.customerOrder.Gender = this.isChecked();
                        console.log(this.customerOrder);
                },
                getOrderReturn: function(){
                        var thingArray = {};
                        thingArray.Firstname= document.getElementById("firstname").value;
                        thingArray.Lastname = document.getElementById("lastname").value;
                        thingArray.Email = document.getElementById('email').value;
                        thingArray.PaymentOption= document.getElementById('payment').value;
                        thingArray.Gender =this.isChecked();
                        return thingArray;
                },
                displayOrder: function(event){
                        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                                y: event.currentTarget.getBoundingClientRect().top};
                                this.ord.x = event.clientX - 10 - offset.x;
                                this.ord.y = event.clientY - 10 - offset.y;
                        },
                        removeBurger: function(index){
                                var deletethis = savedBurgers.indexOf(index);
                                this.savedBurgers.splice(index,this.savedBurgers.length);
                        },
                        clearArray: function(array){
                                this.array = [];
                        },
                        addOrder: function (event) {
                                var customerInfo = this.getOrderReturn();
                                console.log(customerInfo);
                                var offset = {x: event.currentTarget.getBoundingClientRect().left,
                                        y: event.currentTarget.getBoundingClientRect().top};
                                        socket.emit("addOrder", { orderId: this.getNext(),
                                                details: { x: this.ord.x,
                                                        y: this.ord.y},
                                                        orderItems: this.orderedBurgers,
                                                        orderCustomer: customerInfo
                                                });

                                                for(var i = 0; i<this.orderedBurgers.length; i++){
                                                        this.savedBurgers[i] = this.orderedBurgers[i];
                                                }
                                                this.orderedBurgers.splice(0,this.orderedBurgers.length);
                                                this.getOrder();


                                                /*this.customerOrder = this.getOrder();
                                                console.log(this.customerOrder);
                                                */
                                        },
                                        checkFunc: function(stuff){
                                                console.log(stuff);
                                        },
                                        addBurger: function(burger){
                                                this.orderedBurgers.push(burger);
                                                console.log(burger);
                                        },

                                        isChecked:function(){
                                                if(document.getElementById('man').checked){
                                                        return document.getElementById('man').value;
                                                }
                                                else if(document.getElementById('woman').checked){
                                                        return document.getElementById('woman').value;

                                                }else  if(document.getElementById('other').checked){
                                                        return document.getElementById('other').value;
                                                }
                                        },

                                }
                        });
