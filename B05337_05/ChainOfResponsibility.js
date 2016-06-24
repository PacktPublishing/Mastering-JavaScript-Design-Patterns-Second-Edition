var Westeros;
(function (Westeros) {
    var JudicialSystem;
    (function (JudicialSystem) {
        class Complaint {
            constructor() {
                this.ComplainingParty = "";
                this.ComplaintAbout = "";
                this.Complaint = "";
            }
        }
        JudicialSystem.Complaint = Complaint;
        class ClerkOfTheCourt {
            IsInterestedInComplaint(complaint) {
                //decide if this is a complaint which can be solved by the clerk
                return false;
            }
            ListenToComplaint(complaint) {
                //perform some operation
                //return solution to the complaint
                return "";
            }
        }
        JudicialSystem.ClerkOfTheCourt = ClerkOfTheCourt;
        class King {
            IsInterestedInComplaint(complaint) {
                return true;
            }
            ListenToComplaint(complaint) {
                //perform some operation
                //return solution to the complaint
                return "";
            }
        }
        JudicialSystem.King = King;
        class ComplaintResolver {
            constructor() {
                this.complaintListeners = new Array();
                this.complaintListeners.push(new ClerkOfTheCourt());
                this.complaintListeners.push(new King());
            }
            ResolveComplaint(complaint) {
                for (var i = 0; i < this.complaintListeners.length; i++) {
                    if (this.complaintListeners[i].IsInterestedInComplaint(complaint)) {
                        return this.complaintListeners[i].ListenToComplaint(complaint);
                    }
                }
            }
        }
        JudicialSystem.ComplaintResolver = ComplaintResolver;
    })(JudicialSystem = Westeros.JudicialSystem || (Westeros.JudicialSystem = {}));
})(Westeros || (Westeros = {}));
