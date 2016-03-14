var _ = require('lodash');

var allBooks = 
                  [ 



                    {   "age" :0,
                        "isbn": "211-555-12-12",
                        "imageUrl": "images/books/hungerGames.jpg",
                        "title" : "The Hunger Games",
                        "author" : "Suzanne Collions",
                        "genre" : "Fiction",
                        "rating": "3",
                        "printType": "PaperBack",
                        "publisher": "Scholastic Press",
                        "publishDate": "September 14, 2008",
                        "pages" : "374",
                        "language": "English",
                        "description": "In a dystopian future, the totalitarian nation of Panem is divided into 12 districts and the Capitol. Each year two young representatives from each district are selected by lottery to participate in The Hunger Games. Part entertainment, part brutal retribution for a past rebellion, the televised games are broadcast throughout Panem. The 24 participants are forced to eliminate their competitors while the citizens of Panem are required to watch. When 16-year-old Katniss' young sister, Prim, is selected as District 12's female representative, Katniss volunteers to take her place. She and her male counterpart, Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives."
                    },


                    {   "age" :1,
                        "isbn": "111-223-23-22",
                        "imageUrl": "images/books/harryPotter1.jpg",
                        "title" : "Harry Potter and the Philospher's Stone",
                        "author" : "J.K Rowling",
                        "genre"  : "Fantasy",
                        "rating": "5",
                        "printType": "HardBack",
                        "publisher": "Bloomsbury",
                        "publishDate": "June 26, 1997",
                        "pages" : "310",
                        "language": "English",
                        "description": "Harry Potter thinks he is an ordinary boy. He lives with his Uncle Vernon, Aunt Petunia and cousin Dudley, who are mean to him and make him sleep in a cupboard under the stairs. (Dudley, however, has two bedrooms, one to sleep in and one for all his toys and games.) Then Harry starts receiving mysterious letters and his life is changed forever. He is whisked away by a beetle-eyed giant of a man and enrolled at Hogwarts School of Witchcraft and Wizardry. The reason: Harry Potter is a wizard! The first book in the \"Harry Potter\" series makes the perfect introduction to the world of Hogwarts."
                    },


                    {   "age" :2,
                        "isbn": "144-344-34-44",
                        "imageUrl": "images/books/mySistersKeeper.jpg",
                        "title" : "My Sisters Keeper",
                        "author" : "Jodi Picoult",
                        "genre" : "Drama",
                        "rating": "3",
                        "printType": "PaperBack",
                        "publisher": "Simon & Schuster",
                        "publishDate": "April 6, 2004",
                        "pages" : "423",
                        "language": "English",
                        "description": "Anna is not sick, but she might as well be. By age thirteen, she has undergone countless surgeries, transfusions, and shots so that her older sister, Kate, can somehow fight the leukemia that has plagued her since childhood. The product of preimplantation genetic diagnosis, Anna was conceived as a bone marrow match for Kate -- a life and a role that she has never challenged... until now. Like most teenagers, Anna is beginning to question who she truly is. But unlike most teenagers, she has always been defined in terms of her sister—and so Anna makes a decision that for most would be unthinkable, a decision that will tear her family apart and have perhaps fatal consequences for the sister she loves."
                    },


                    {   "age" :3,
                        "isbn": "922-998-34-21",
                        "imageUrl": "images/books/theGirlOnTheTrain.jpg",
                        "title" : "The Girl On the Train",
                        "author" : "Paula Hawkins",
                        "genre" : "Mystery",
                        "rating": "5",
                        "printType": "PaperBack",
                        "publisher": "Waterstone Books",
                        "publishDate": "January 13, 2015",
                        "pages" : "325",
                        "language": "English",
                        "description": "A debut psychological thriller that will forever change the way you look at other people’s lives. Rachel takes the same commuter train every morning. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She’s even started to feel like she knows them. “Jess and Jason,” she calls them. Their life—as she sees it—is perfect. Not unlike the life she recently lost And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Unable to keep it to herself, Rachel offers what she knows to the police, and becomes inextricably entwined in what happens next, as well as in the lives of everyone involved. Has she done more harm than good? Compulsively readable, The Girl on the Train is an emotionally immersive, Hitchcockian thriller and an electrifying debut."
                    },


                    {   "age" :4,
                        "isbn": "332-311-31-21",
                        "imageUrl": "images/books/thePact.jpg",
                        "title" : "The Pact",
                        "author" : "Jodi Picoult",
                        "genre" : "Fiction",
                        "rating": "4",
                        "printType": "PaperBack",
                        "publisher": "Scholastic Press",
                        "publishDate": "September 1998",
                        "pages" : "512",
                        "language": "English",
                        "pages": "512",
                        "description": "For eighteen years the Hartes and the Golds have lived next door to each other, sharing everything from Chinese food to chicken pox to carpool duty-- they've grown so close it seems they have always been a part of each other's lives. Parents and children alike have been best friends, so it's no surprise that in high school Chris and Emily's friendship blossoms into something more. They've been soul mates since they were born. So when midnight calls from the hospital come in, no one is ready for the appalling truth: Emily is dead at seventeen from a gunshot wound to the head. There's a single unspent bullet in the gun that Chris took from his father's cabinet-- a bullet that Chris tells police he intended for himself. But a local detective has doubts about the suicide pact that Chris has described."
                    },

                    {   "age" :5,
                        "isbn": "611-622-62-63",
                        "imageUrl": "images/books/catchingFire.jpg",
                        "title" : "The Hunger Games: Catching Fire",
                        "author" : "Suzanne Collions",
                        "genre" : "Fiction",
                        "rating": "4",
                        "printType": "PaperBack",
                        "publisher": "Avon Publisher",
                        "publishDate": "September 1, 2009",
                        "pages" : "391",
                        "language": "English",
                        "description": "Against all odds, Katniss has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive. Katniss should be relieved, happy even. After all, she has returned to her family and her longtime friend, Gale. Yet nothing is the way Katniss wishes it to be. Gale holds her at an icy distance. Peeta has turned his back on her completely. And there are whispers of a rebellion against the Capitol - a rebellion that Katniss and Peeta may have helped create. Much to her shock, Katniss has fueled an unrest she's afraid she cannot stop. And what scares her even more is that she's not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol's cruel Victory Tour, the stakes are higher than ever. If they can't prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying. In Catching Fire, the second novel in the Hunger Games trilogy, Suzanne Collins continues the story of Katniss Everdeen, testing her more than ever before...and surprising readers at every turn.."
                    },

                    {   "age" :6,
                        "isbn": "717-722-62-63",
                        "imageUrl": "images/books/goneGirl.jpg",
                        "title" : "Gone Girl",
                        "author" : "Gillian Flynn",
                        "genre" : "Thriller",
                        "rating": "4",
                        "printType": "PaperBack",
                        "publisher": "Crown Publishing Group",
                        "publishDate": "June 2012",
                        "pages" : "422",
                        "language": "English",
                        "description": "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy’s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter—but is he really a killer? "
                    },

                

                     {  "age" :7,
                        "isbn": "811-100-22-11",
                        "imageUrl": "images/books/harryPotter2.jpg",
                        "title" : "Harry Potter and the Chamber of Secrets",
                        "author" : "JK.Rowling",
                        "genre" : "Fantasy",
                        "rating": "4",
                        "printType": "PaperBack",
                        "publisher": "Bloomsbury",
                        "publishDate": "July 2, 1998",
                        "pages" : "341",
                        "language": "English",
                        "description": "All Harry Potter wants is to get away from the Dursleys and go back to Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby - who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockheart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone--or something--starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects... Harry Potter himself. "
                    },

                    {  "age" :8,
                        "isbn": "688-108-11-11",
                        "imageUrl": "images/books/theHobbit.jpg",
                        "title" : "The Hobbit",
                        "author" : "J.R.R. Tolkien",
                        "genre" : "Adventure",
                        "rating": "4",
                        "printType": "PaperBack",
                        "publisher": "Houghton Mifflin",
                        "publishDate":"August 15th 2002",
                        "pages" : "366",
                        "language": "English",
                        "description": "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable! "
                    },

                    {  "age" :9,
                        "isbn": "999-199-03-10",
                        "imageUrl": "images/books/faultInOurStars.jpg",
                        "title" : "The Fault in our Stars",
                        "author" : "John Green",
                        "genre" : "Young Adult",
                        "rating": "3",
                        "printType": "PaperBack",
                        "publisher": "Dutton Books",
                        "publishDate":"January 10th 2012",
                        "pages" : "313",
                        "language": "English",
                        "description": "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green's most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love "
                    },

                    {  "age" :10,
                        "isbn": "404-222-11-11",
                        "imageUrl": "images/books/paperTowns.jpg",
                        "title" : "Paper Towns",
                        "author" : "John Green",
                        "genre" : "Young Adult",
                        "rating": "2",
                        "printType": "PaperBack",
                        "publisher": "Dutton Books",
                        "publishDate":"October 16th 2008",
                        "pages" : "305",
                        "language": "English",
                        "description": "Quentin Jacobsen has spent a lifetime loving the magnificently adventurous Margo Roth Spiegelman from afar. So when she cracks open a window and climbs into his life—dressed like a ninja and summoning him for an ingenious campaign of revenge—he follows. After their all-nighter ends, and a new day breaks, Q arrives at school to discover that Margo, always an enigma, has now become a mystery. But Q soon learns that there are clues—and they're for him. Urged down a disconnected path, the closer he gets, the less Q sees the girl he thought he knew..."
                    }







                    ];


 var bookAPI = {

          getBook : function(i) {
            var index = _.findIndex(allBooks, function(book) {
              return book.isbn == i;
            });

            return allBooks[index]; 
          },
          getAll : function() {
              return allBooks;
          },

         
         
    }
    


    exports.bookAPI = bookAPI ;
    exports.allBooks = allBooks ; 