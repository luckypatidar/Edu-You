// based on id which we recieved we fetch the chapter name of particular subject
// main array contain data basis on class
// nested array contain data basis on subject
// in nested array 
// mathematics chemistry physics biology ip
const Data = [
    [
        [
            {
                name:"Physical World",
                id:"1",
            },
            {
                name:"Units and Measurement",
                id:"2",
            },
            {
                name:"Motion in a Straight Line",
                id:"3",
            },
            {
                name:"Motion in a Plane",
                id:"4",
            },
            {
                name:"Law of Motion",
                id:"5",
            },
            {
                name:"Work Energy and Power",
                id:"6",
            },
            {
                name:"System of Particles and Rotational Motion",
                id:"7",
            },
            {
                name:"Gravitation ",
                id:"8",
            },
            {
                name:"Thermodynamics",
                id:"9",
            },
            {
                name:"Oscillations",
                id:"10",
            },
            {
                name:"Kinetic Theory",
                id:"11",
            },
            {
                name:"Waves",
                id:"12",
            },
        ],
        // chemistry
        [
            {
                name:"Some Basic Concepts of Chemistry",
                id:"1",
            },
            {
                name:"Structure of Atom",
                id:"2",
            },
            {
                name:"Classification of Elements and Periodicity in Properties",
                id:"3",
            },
            {
                name:"Chemical Bonding and Molecular Structure",
                id:"4",
            },
            {
                name:"States of Matter",
                id:"5",
            },
            {
                name:"Thermodynamics",
                id:"6",
            },
            {
                name:"Equilibrium",
                id:"7",
            },
            {
                name:"Redox Reactions",
                id:"8",
            },
            {
                name:"Hydrogen",
                id:"9",
            },
            {
                name:"The p-Block Elements",
                id:"10",
            },
            {
                name:"The s-Block Elements",
                id:"11",
            },
        ],
        [
            {
                name:"Sets",
                id:"1",
            },
            {
                name:"Relations and Functions",
                id:"2",
            },
            {
                name:"Trigonometric Functions",
                id:"3",
            },
            {
                name:"Principle of Mathematic Induction",
                id:"4",
            },
            {
                name:"Complex Number and Quadratic Equation",
                id:"5",
            },
            {
                name:"Linear Inrquality",
                id:"6",
            },
            {
                name:"Permutation and Combination",
                id:"7",
            },
            {
                name:"Binomial Theorem",
                id:"8",
            },
            {
                name:"Sequence and Series",
                id:"9",
            },
            {
                name:"Probability and Statistics",
                id:"10",
            },

        ],
        [
            {
                name:"THE LIVING WORLD",
                id:"1",   
            },
            {
                name:"BIOLOGICAL CLASSIFICATION",
                id:"2"
            },
            {
                name:"PLANT KINGDOM",
                id:"3"
            },
            {
                name:" ANIMAL KINGDOM",
                id:"4"
            },
            {
                name:"MORPHOLOGY OF FLOWERING PLANTS",
                id:"5"
            },
            {
                name:"ANATOMY OF FLOWERING PLANTS",
                id:"6"
            },
            {
                name:"STRUCTURAL ORGANISATION IN ANIMALS",
                id:"7"
            },
            {
                name:"CELL: THE UNIT OF LIFE",
                id:"8"
            },
            
        ],
        [
            {
                name:"Computer System",
                id:"1",
            },
            {
                name:"Emerging Trends",
                id:"2",
            },
            {
                name:" Brief Overview of Python",
                id:"3",
            },
            {
                name:"Working With the List of Dictionaries",
                id:"4",
            },
            {
                name:"Understanding Data",
                id:"5",
            },
            {
                name:" Introduction of Numpy",
                id:"6",
            },
            {
                name:"Database Concepts",
                id:"7",
            },
            {
                name:" Introduction to Structured Query Language (SQL)",
                id:"8",
            },

        ],
        [

        ]
    ]
    ,[
        //class 12
        [
            //physics
            {
                name:"Electric Charges And Fields",
                id:"1",
            },
            {
                name:"Electrostatic Potential And Capacitance",
                id:"2",
            },
            {
                name:"Current Electricity",
                id:"3",
            },
            {
                name:"Moving Charges And Magnetism",
                id:"4",
            },
            {
                name:"Magnetism And Matter",
                id:"5",
            },
            {
                name:"Electromagnetic Induction",
                id:"6",
            },
            {
                name:"Alternating Current",
                id:"7",
            },
            {
                name:" Electromagnetic Waves",
                id:"8",
            },
            {
                name:" Ray Optics and Optical Instruments",
                id:"9",
            },
            {
                name:"Wave Optics",
                id:"10",
            },
            {
                name:"Dual Nature Of Radiation And Matter",
                id:"11",
            },
        ],
        [
            {
                name:"The Solid State",
                id:"1"
            },
            {
                name:"Solutions",
                id:"2"
            },
            {
                name:"Electrchemistry",
                id:"3"
            },
            {
                name:"Surface Chemistry",
                id:"4"
            },
            {
                name:"Metallurgy",
                id:"5"
            },
            {
                name:"Coordination Compounds",
                id:"6"
            },
            {
                name:"Alcohol Alkaline and Ether",
                id:"7"
            },
            {
                name:"Amines",
                id:"8"
            },
            {
                name:"Polymers",
                id:"9"
            },
            {
                name:"D-Block and F-Block",
                id:"10"
            },
            {
                name:"Biomolecules",
                id:"11"
            },
            {
                name:"Chemistry in Everyday Life",
                id:"12"
            },
            
        ],
        [
            //maths
            {
                name:"Relation and Functions",
                id:"1",
            },
            {
                name:"Inverse Trigonometry Functions",
                id:"2",
            },
            {
                name:"Matrices",
                id:"3",
            },
            {
                name:"Determinants",
                id:"4",
            },
            {
                name:"Continuity and Differentiability",
                id:"5",
            },
            {
                name:"Application of Derrivative",
                id:"6",
            },
            {
                name:"Integrals",
                id:"7",
            },
            {
                name:"Application of Integrals",
                id:"8",
            },
            {
                name:"Differential Equations",
                id:"9",
            },
            {
                name:"Linear Programming",
                id:"10",
            },
            {
                name:"Three Dimensional Geometry",
                id:"11",
            },
            {
                name:"Probability",
                id:"12",
            },
            

        ],
        [
            // biology
            {
                name:"Reproduction in Organisms",
                id:"1",
            },
            {
                name:"Sexual Reproduction in Flowering Plants",
                id:"2",
            },
            {
                name:"Human Reproduction",
                id:"3",
            },
            {
                name:"Reproductive Health",
                id:"4",
            },
            {
                name:"Principle of Inheritance and Variation",
                id:"5",
            },
            {
                name:"Moleculare basis of Inheritance",
                id:"6",
            },
            {
                name:"Evolution",
                id:"7",
            },
            {
                name:"Human Health and Disease",
                id:"8",
            },
            {
                name:"Strategies for Enhancement in Food Production",
                id:"9",
            },
            {
                name:"Microbes in Human Welfare",
                id:"10",
            },
            {
                name:"Biotechonology and its Application",
                id:"11",
            },
            {
                name:"Organisms and Population",
                id:"12",
            },
            {
                name:"Ecosystem",
                id:"13",
            },
        ],
        [
            // ip
            {
                name:"Computer Networking",
                id:"1",
            },
            {
                name:"Open Source Concepts ",
                id:"2",
            },
            {
                name:"Java Programming Fundamentals (Revision Tour-I) ",
                id:"3",
            },
            {
                name:" Swing Controls (Revision Tour-II) ",
                id:"4",
            },
            {
                name:" GUI Programming and Access Specifier",
                id:"5",
            },
            {
                name:"Inheritance Class 12 Notes",
                id:"6",
            },
            {
                name:"Accessing MySQL Database Using ODBC/JDBC",
                id:"7",
            },
            {
                name:"Web Application Development",
                id:"8",
            },
            {
                name:" HTML and XML",
                id:"9",
            },
            {
                name:"Fundamentals of Database",
                id:"10",
            },
            {
                name:"SQL Functions and Table Joins",
                id:"11",
            },
            {
                name:"Integrity Constraints and Tables ",
                id:"12",
            },
            {
                name:" Front-End Interface ",
                id:"13",
            },
            {
                name:"Back-End Database",
                id:"14",
            },
            {
                name:"E-Services and ICT ",
                id:"15",
            },
            
        ]

    ]
]
export default Data;