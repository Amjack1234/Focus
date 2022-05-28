const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://focus:focus123@focuscluster.3xst7.mongodb.net/?retryWrites=true&w=majority";
const mclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mclient.connect(err => {
    const db = mclient.db("users")
    db.collection("allusers")
    var myobj = { name: "Company Inc", address: "Highway 37" };
        db.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
    // perform actions on the collection object
    mclient.close();
});*/







const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });



const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.login('OTgwMTI4MzIxNzIxNDcxMDA2.GHvONK.x3DdTJ2SNnLWgvMOArHDNiGmZa0q4ESKqGZhW8');

client.once('ready', () => {
    console.log('deez nuts in your mom');
    

});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'challenge'){
        client.commands.get('challenge').execute(message, args);
    }
})




















