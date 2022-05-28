module.exports = {
    name: 'ping',
    description: "ping pong", 


    
    async execute(message, args){
        
        var prevState = "none"

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.member(message.author);

        var checkminutes = .1, checkthe_interval = checkminutes * 60 * 1000;

        setInterval(async function() {
            await member.guild.members.fetch();

            try{
                activity = member.presence.activities[0].name
                if(activity != prevState){
                    console.log("different")
                    prevState = activity
                    var current = new Date()
                    message.channel.send(member.user.username+ "has started the activity " + activity + " at " + current.toLocaleTimeString() );
                    console.log()
                }
            }
            catch{
                prevState = "nothing happening"
                console.log("hello")
            }

        }, checkthe_interval);
    

    }
}