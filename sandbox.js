var Bet = Backbone.Model.extend({
    defaults: function(){
        return {
            matchup: {},
            strategy: "",
        }
    },
    showAlert: function(){
        alert("Strategy: "+ this.get("strategy"));
    }

});

var bet1 = new Bet({"strategy": "All Time Record"});
bet1.showAlert();