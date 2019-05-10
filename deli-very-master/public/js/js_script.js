
        function menuItem(name, kCal, gluten, lactose) {
                this.name = name;
                this.kCal = kCal;
                this.gluten = gluten;
                this.lactose = lactose;
                this.burger = function(){
                        return this.name;
                }
        }

        var TheGoodBurger = new menuItem("The good burger", 1200, true, true);
        var TheUglyBurger = new menuItem("The ugly burger", 900, true, true);
        var TheBadBurger = new menuItem("The bad burger", 1400, true, true);
        var TheBlondieBurger = new menuItem("The Blondie burger", 1300, true, true);
        var TheTucoBurger = new menuItem("The Tuco burger", 650, false, false);

        var menuArray = [];
        menuArray.push(TheGoodBurger);
        menuArray.push(TheBadBurger);
        menuArray.push(TheUglyBurger);
        menuArray.push(TheBlondieBurger);
        menuArray.push(TheTucoBurger);


        function printFunc(burgerThing){
                for(i = 0; i<burgerThing.length; i++){
                        document.write(burgerThing[i]+"<br>");
                }
        }

        function createHeaders(ID, ID2, ID3, ID4, ID5){
                var boxID = document.getElementById(ID);
                var headerOne = document.createTextNode("The Good Burger");
                boxID.appendChild(headerOne);

                var boxID2 = document.getElementById(ID2);
                var headerTwo = document.createTextNode("The Bad Burger");
                boxID2.appendChild(headerTwo);

                var boxID3 = document.getElementById(ID3);
                var headerThree = document.createTextNode("The Ugly Burger");
                boxID3.appendChild(headerThree);

                var boxID4 = document.getElementById(ID4);
                var headerFour = document.createTextNode("The Blondie Burger");
                boxID4.appendChild(headerFour);

                var boxID5 = document.getElementById(ID5);
                var headerFive = document.createTextNode("The Tuco Burger");
                boxID5.appendChild(headerFive);
        }
        createHeaders("boxA", "boxB", "boxC", "boxD", "boxE");

        function createImages(ID, ID2, ID3, ID4, ID5){
                var picture = document.createElement("img");
                picture.src = "img/hamburger1.jpg";
                picture.setAttribute("alt", "The good burger picture");
                document.getElementById(ID).appendChild(picture);

                var picture2 = document.createElement("img");
                picture2.src = "img/hamburger1.jpg";
                picture2.setAttribute("alt", "The bad burger picture");
                document.getElementById(ID2).appendChild(picture2);

                var picture3 = document.createElement("img");
                picture3.src = "img/hamburger1.jpg";
                picture3.setAttribute("alt", "The ugly burger picture");
                document.getElementById(ID3).appendChild(picture3);

                var picture4 = document.createElement("img");
                picture4.src = "img/hamburger1.jpg";
                picture4.setAttribute("alt", "The Blondie burger picture");
                document.getElementById(ID4).appendChild(picture4);

                var picture5 = document.createElement("img");
                picture5.src = "img/hamburger1.jpg";
                picture5.setAttribute("alt", "The ugly burger picture");
                document.getElementById(ID5).appendChild(picture5);
        }
        createImages("boxF", "boxG", "boxH", "boxI", "boxJ");

        function allergies(burger, burgerID){
                if(burger.lactose == true){
                        var node = document.createElement("LI");
                        var textnode = document.createTextNode("Contains: ");
                        var string = "Lactose";
                        var textnode2 = document.createTextNode(string);
                        var span = document.createElement('span');
                        node.appendChild(textnode);
                        node.appendChild(span);
                        span.appendChild(textnode2);
                        span.style.fontWeight = 'bold';
                        document.getElementById(burgerID).appendChild(node);
                }
                if(burger.gluten == true){
                        var node = document.createElement("LI");
                        var textnode = document.createTextNode("Contains: ");
                        var string = "Gluten";
                        var textnode2 = document.createTextNode(string);
                        var span = document.createElement('span');
                        node.appendChild(textnode);
                        node.appendChild(span);
                        span.appendChild(textnode2);
                        span.style.fontWeight = 'bold';
                        document.getElementById(burgerID).appendChild(node);
                }
                if(burger.gluten != true && burger.lactose != true){
                        var node = document.createElement("LI");
                        var textnode = document.createTextNode("Contains: ");
                        var string = "Gluten & ";
                        var string3 = "Lactose";
                        var string4 = " free!";
                        var textnode5 = document.createTextNode(string);
                        var textnode3 = document.createTextNode(string3);
                        var textnode4 = document.createTextNode(string4);
                        var span = document.createElement('span');
                        span.appendChild(textnode5);
                        span.appendChild(textnode3);
                        span.appendChild(textnode3);
                        node.appendChild(textnode4);
                        node.appendChild(span);
                        span.style.fontWeight = 'bold';
                        document.getElementById(burgerID).appendChild(node);
                }
        }
        allergies(TheGoodBurger,  "ingedientsTGB");
        allergies(TheBadBurger, "ingedientsTBB");
        allergies(TheUglyBurger, "ingedientsTUB");
        allergies(TheBlondieBurger, "ingedientsTBLB");
        allergies(TheTucoBurger, "ingedientsTTB");

        function printArray(array){
                for(x in array){
                        document.write(array[x]);
                }
        }

        function printOrder(array){
                var infoArray = [];
                infoArray.push("First name: ");
                infoArray.push("Last name: ");
                infoArray.push("Email: ");
                infoArray.push("Payment option: ")
                infoArray.push("Gender: ");
                var i=0;
                for(x in array){
                        document.write(infoArray[i]+array[x]+"</br>");
                        i++;
                }
        }
        /*
        function getOrder(){
                console.log("sadasd");
                var orderArray = new Array();
                orderArray["firstname"] = document.getElementById("firstname").value;
                orderArray["lastname"] = document.getElementById('lastname').value;
                orderArray["email"] = document.getElementById('email').value;
                //orderArray["street"]  = document.getElementById('street').value;
                //orderArray["house"]  = document.getElementById('house').value;
                orderArray["paymentOption"] = document.getElementById('payment').value;
                orderArray["sex"] = document.getElementById('sex').value;
                printOrder(orderArray);
        }

        var submitButton = document.getElementById('submitID');
         submitButton.addEventListener('click', addOrder, false);
*/
