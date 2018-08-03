<div className='EmployeesList-area'>
                  <TabBar/>
                  { !this.props.employees.length
                    ? <p>loading...</p>
                    : <div>
                      <p>EMPLOYEES:</p>
                      <EmployeesList
                        employees={this.props.employees} 
                        viewEmplPage={this.emplClicked}
                        deleteEmployee={this.deleteEmployee}
                        editEmployee={this.editEmployeeClicked}/>
                      <Button
                        style={styles.addButton}
                        className='addButt'
                        variant="contained"
                        color="primary">
                        <Link 
                          className='linkBut' 
                          to="/addEmployeeForm">
                        add employee
                        </Link>
                      </Button>
                    </div>
                  }
                </div>