const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log(`passport의 local-login 호출됨 : ${email}, ${password}`);

    const database = req.app.get('database');
    database.UserModel.findOne({ 'email': email }, (err, user) => {
        if (err) { return done(err); }

        if (!user) {
            console.log('계정이 일치하지 않음.');
            return done(null, false, req.flash('loginMessage', '등록된 계정이 없습니다.'));
        }

        const authenticated = user.authenticate(password, user._doc.salt, user._doc.hashed_password);
        if (!authenticated) {
            console.log('비밀번호 일치하지 않음.');
            return done(null, false, req.flash('loginMessage', '비밀번호가 일치하지 않습니다.'));
        }

        console.log('계정과 비밀번호가 일치함.');
        return done(null, user);
    });
});