

var myOtherObj = {
    remove: function(){
        // do some removal stuffs
        return myOtherObj;
    }
}

var myObj = {
    click: function(){
        // do the click stuff
        return myObj;
    },
    hide: function(){
        // do the hide stuff
        return myObj;
    },
    show: function(){
        // do the show stuff
        return myObj;
    },
    width: function() {
        return 300;
    },
    foobar: function(){
        return myOtherObj;
    }
}


myObj.hide().foobar().remove().remove()









var myObj = {
    'foo': {
        'boo': 'ya',
        'bam': 'dizzle',
        'foobar': {
            'blech': function() {
                return myObj;
            }
        }
    },
    baz: 'bam',
    'foo-bar': 'baz foo',
    'foo bar lksdjf lsdkjflk lksjdf lsdkfj sldkfj ': 'baz foo',
    myFunc: function () {
        return 'booya';
    }
};



myObj.foo.foobar.blech().foo.foobar.blech()['foo']['foobar'].blech().foo.foobar.blech().myFunc()






myObj.foo // = 'bar'
myObj['foo'] // = 'bar'

var myString = 'foo';


myObj[myString] // = 'bar'


myObj.myFunc() // = 'booya'
myObj['myFunc']() // = 'booya'

var myFunc = myObj['myFunc'];

myFunc();


window.setTimeout myFunc, 300


window.setTimeout
window['setTimeout']()

