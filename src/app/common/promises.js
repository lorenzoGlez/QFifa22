var app;
(function (app) {
    var Promises = /** @class */ (function () {
        function Promises() {
        }
        Promises.getPreferences = function (dataAccessService) {
            return new Promise(function (resolve, reject) {
                var preferencesResource = dataAccessService.getPreferencesResource();
                preferencesResource.get(function (dataPreferences) {
                    resolve(dataPreferences);
                }).$promise.catch(function (reason) {
                    reject(reason);
                });
            });
        };
        Promises.getOwners = function (dataAccessService, price) {
            return new Promise(function (resolve, reject) {
                var ownerResource = dataAccessService.getOwnerResource();
                ownerResource.query(function (data) {
                    resolve(data.filter(function (owner) {
                        return owner.quiniela == price;
                    }));
                }).$promise.catch(function (reason) {
                    reject(reason);
                });
            });
        };
        Promises.getGames = function (dataAccessService) {
            return new Promise(function (resolve, reject) {
                var gameResource = dataAccessService.getGameResource();
                gameResource.get(function (data) {
                    resolve(data);
                }).$promise.catch(function (reason) {
                    reject(reason);
                });
            });
        };
        Promises.getFixGames = function (dataAccessService, backupURL) {
            return new Promise(function (resolve, reject) {
                var gameFixedResource = dataAccessService.getGameFixedResource(backupURL);
                gameFixedResource.get(function (dataFixed) {
                    resolve(dataFixed);
                }).$promise.catch(function (reason) {
                    reject(reason);
                });
            });
        };
        Promises.getTeams = function (dataAccessService) {
            return new Promise(function (resolve, reject) {
                var teamResource = dataAccessService.getTeamResource();
                teamResource.get(function (data) {
                    var teams = data.standings.A;
                    teams = teams.concat(data.standings.B);
                    teams = teams.concat(data.standings.C);
                    teams = teams.concat(data.standings.D);
                    teams = teams.concat(data.standings.E);
                    teams = teams.concat(data.standings.F);
                    teams = teams.concat(data.standings.G);
                    teams = teams.concat(data.standings.H);
                    resolve(teams);
                }).$promise.catch(function (reason) {
                    reject(reason);
                });
            });
        };
        return Promises;
    }());
    app.Promises = Promises;
})(app || (app = {}));
