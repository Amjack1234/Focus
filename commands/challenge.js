module.exports = {
    name: 'challenge',
    description: "stores the user's challege status", 
    execute(message, args){
        
        message.member.roles.add('980185259742220338');
        message.channel.send('challenge role added');
    }
}